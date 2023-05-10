function run(params)
{

    let params = {
        tunnelOriginator   : `{{tunnel.originator}}`,
        tunnelOwner        : `{{tunnel.owner}}`,
        stagingEnvironment : false,
        input              : `{{input.content}}`,
        debugCustomer      : `{{config.debugCustomer}}`
    }

       let config = {}

    try 
    {
        config.env = getEnvironment(params)
        config.originator = setOriginator(params)
        config.channel    = getChannel(config)
        config.applicationType = getApplicationType(config)
        config.markup  = getMarkups(config)
        config.regex   = getRegex()
        config.tokens  = getTokens(config)
        config.urls    = getUrls(config)
        

        //LGPD BOT configuration
        config.version  = `1.0.0`
        config.required = true

        // Watson configuration
        config.intentScore = "0.70"

    } 
    catch (error) 
    {
        config.erro = {
           exist : true,
           description : error.toString()
        }
    }

    return config
}

function getUrls(config)
{
    return {
        blip : ``,
        bitrix: ``,
        watson: ``
    }
}

function getTokens(config)
{
    let routerKey = "Empty"
    
    if (config.env != 'prd' && config.env != 'stg' && config.env != 'hmg')
    {
        routerKey = ``
    }
    else if (config.env == 'hmg')
    {
        routerKey = ``
    }
    else if (config.env == 'prd')
    {
        routerKey = ``
    }

    return {
        router : routerKey,
        watson: ``
    }
}

function setOriginator(params, env)
{
    if(env == undefined)
        env = getEnvironment(params)

    return env != "dev" ? params.tunnelOriginator : params.debugCustomer
}

function getEnvironment(params)
{
    let debugEnvironment        = (params.tunnelOwner.length == 0)
    let homologEnvironment      = (params.tunnelOwner.match(/(hmg|homolog|homg)/gi))
    let developmentEnvironment  = (params.tunnelOwner.match(/(dev|bet)/gi)) 
    let stagingEnvironment      = (params.stagingEnvironment)

    if(debugEnvironment)
        return 'dev'

    if(homologEnvironment)
        return 'hmg'

    if(developmentEnvironment)
        return 'tst'

    if(stagingEnvironment)
        return 'stg'

    return 'prd'
}

function getChannel(config, params)
{
    if(config.originator == undefined)
        config.originator = params.tunnelOriginator

    if(config.originator.search('@wa.gw.msging.net') != -1)
        return 'WhatsApp'
    
    if(config.originator.search('@0mn.io') != -1)
        return 'Chat'
    
    return 'Default'
}

function getApplicationType(config)
{
    let applicationTypeFor = {
        //"WhatsApp" : "application/json",
        "WhatsApp" : "text/plain",
        "Chat"     : "application/vnd.lime.select+json",
        "Default"  : "text/plain"
    }

    return applicationTypeFor[config.channel]
}

function getMarkups(config)
{
    let makrups = {
        "WhatsApp" : { 
            ni : "*", 
            nf : "*", 
            ii : "_", 
            if : "_"
        },
        "Chat" : { 
            ni : "<b>", 
            nf : "</b>",
            ii : "<i>", 
            if : "</i>" 
        },
        "Default"  : { 
            ni : "", 
            nf : "", 
            ii : "", 
            if : ""
        }
    }
    return makrups[config.channel]
}

function getRegex(params)
{
    let RegexToLeave = `{{resource.RegexToLeave}}`
    let RegexToHuman = `{{resource.RegexToHuman}}`
    let RegexToAfirm  = `{{resource.RegexToAfirm}}`
    let RegexToDeny  = `{{resource.RegexToDeny}}`
    let RegexToBack  = `{{resource.RegexToBack}}`

    RegexToHuman = RegexToHuman.length == 0 ? `(human|atendent|ajuda|especialista|alguem)` : RegexToHuman
    RegexToLeave = RegexToLeave.length == 0 ? `(sair|encerr|finaliza)` : RegexToLeave
    RegexToAfirm  = RegexToAfirm.length  == 0 ? `(sim|seguir|ok|vamos|pode|beleza)` : RegexToAfirm
    RegexToDeny  = RegexToDeny.length  == 0 ? `(nao)` : RegexToDeny
    RegexToBack  = RegexToBack.length  == 0 ? `(retornar|voltar|outro menu)` : RegexToBack

    return {
        forHuman   : RegexToHuman,
        forLeave   : RegexToLeave,
        forBack    : RegexToBack,
        forAffirm  : RegexToAfirm,
        forDeny    : RegexToDeny
    }
}