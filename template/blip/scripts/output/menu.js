function run(params) {

    params = {
        config: `{{config}}`,
        input: `{{input}}`,
        list: `{{options}}`
    }

    try {
        if (params === undefined)
            throw new Error('Sem parametro de entrada')


        const config = JSON.parse(params.config)
        let list = JSON.parse(params.list)
        let menuTitle = "{{messages@menu}}"

        let menuFor = {
            //'WhatsApp' : buildDynamicWhatsAppMenu,
            'WhatsApp' : buildWhatsAppMenu,
            'Chat'     : buildChatMenu,
            'Default'  : buildMenu
        }


        if (params.input !== "") {

            const input = JSON.parse(params.input)

            if (input.erro.exist) {

                if (input.erro.retry == 1) {
                    menuTitle = "{{messages@menuFirstErro}}"
                }
                else if (input.erro.retry == 2) {
                    menuTitle = "{{messages@menuSecondErro}}"
                }

            }

        }


        return menuFor[config.channel](menuTitle, list)

    }
    catch (error) {
        return error.toString()
    }
}

function buildMenu(menuTitle, list) {
    let menu = `{{config@emoji.main}} ${menuTitle}\n\n`

    list.forEach((element, index) => {
        menu = menu + `${element.index}. ${element.option}\n`
    })
    return menu
}

function buildChatMenu(menuTitle, list) {

    let menu = `{"text":"{{config@emoji.main}} ${menuTitle}\\n\\n","options":[`
    list.forEach((element, index) => {
        menu = menu + `{ 
            "text":" ${element.option}", 
            "previewText":" ${element.option}", 
            "value":"${element.option}",
            "index":0,"type":"text/plain"},`
    })

    return menu + `]}`
}

function buildDynamicWhatsAppMenu(menuTitle, list) {
    let menu = `{"recipient_type": "individual",
    "type": "interactive","interactive": {"type": "list","body": {"text": "${menuTitle}"},"action": {"button": "Lista de segmentos","sections": [{"title": "Segmentos","rows": [`

    list.segmentos.forEach((element, index) => {
        menu += `{  "id": "${index + 1}",
                "title": "{{config@markup.ni}}${index + 1}.{{config@markup.nf}} ${element.option}",
                "description":""
            },`
    })

    return menu += `]}]}}}`
}

function buildWhatsAppMenu(menuTitle, list)
{
    let menu = `{{config@emoji.main}} ${menuTitle}\n\n`
    
    list.forEach((element, index) => {
        menu = menu + `{{config@markup.ni}}${element.index}.{{config@markup.nf}} ${element.option}\n`
    })
    return menu
}