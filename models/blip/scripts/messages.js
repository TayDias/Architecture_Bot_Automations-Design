function run(params) {
    params = {
        config : `{{config}}`
    }

    let messages = {}

    try 
    {
        const config     = JSON.parse(params.config)
        let resources   = loadResources(config)
        const emoji     = config.hasEmoji ? config.emoji : {"main" : "", "firstErro": "", "secondErro": "",  "fatalError": ""}

        let mesageVariation = `Text text text`
        let mesageVariationMenu = `Text text text {{config@markup.ni}}text{{config@markup.nf}} text text.`

        if (config.channel == "Chat") {
            mesageVariation = `Text`
            mesageVariationMenu = `{{config@markup.ni}}Text{{config@markup.nf}} text text`
        }


        messages.welcome          = resources.welcome.length           == 0  ? `${emoji.main} Text text text {{config@markup.ni}}text text{{config@markup.nf}} text.\n\nText text text`  : resources.welcome
        messages.welcomeBack      = resources.welcomeBack.length       == 0  ? `${emoji.main} Text text text 🙂`  : resources.welcomeBack
        messages.end              = resources.end.length               == 0  ? `${emoji.main} Text text text\n\nText text text`  : resources.end

        messages.menu             = resources.menu.length              == 0  ? `${emoji.main} Text text text` : resources.menu
        messages.menuAppend       = resources.menuAppend.length        == 0  ? `${emoji.main} ${mesageVariation}` : resources.menuAppend
        
        messages.firstErro        = resources.firstErro.length         == 0  ? `Text text text` : resources.firstErro
        messages.menuFirstErro    = resources.menuFirstErro.length     == 0  ? `${emoji.main} ${mesageVariationMenu}` : resources.menuFirstErro
        messages.menuSecondErro   = resources.menuSecondErro.length    == 0  ? `${emoji.main} Text text text` : resources.menuSecondErro

        
    }
    catch(error)
    {   
        messages.erro = {
            exist : true,
            description : error.toString()
        }
    }

    return JSON.stringify(messages)
}


function loadResources(config)
{
    let resources = {}
    
    resources.welcome           = `{{resource.welcome}}`
    resources.welcomeBack       = `{{resource.welcomeBack}}`
    resources.menu              = `{{resource.menu}}`
    resources.menuAppend        = `{{resource.menuAppend}}`
    resources.firstErro         = `{{resource.firstErro}}`
    resources.menuFirstErro     = `{{resource.menuFirstErro}}`
    resources.menuSecondErro    = `{{resource.menuSecondErro}}`
    resources.end               = `{{resource.end}}`

    return resources
}
