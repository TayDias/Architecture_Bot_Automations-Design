function run() {

    params = {
        response: `{{responseWatson}}`,
        status: `{{statusWatson}}`,
        config: `{{config}}`
    }

    let watsonIntents = {}

    watsonIntents.found = false
    watsonIntents.intent = ""

    try {

        if (params.status != 200) {
            throw new Error('failed')
        }


        let response = JSON.parse(params.response)
        let config = JSON.parse(params.config)

        if (response.intents.length == 0) {
            throw new Error('exception') 
        }

        if (response.intents[0].confidence >= config.intentScore) {

             watsonIntents.intent = response.intents[0].intent
             watsonIntents.found = true

        }

    }
    catch (error) {
        watsonIntents.error = true
        watsonIntents.description = error.toString()
    }

    watsonIntents = JSON.stringify(watsonIntents)

    return watsonIntents
}