function run() {

    params = {
        response: `{{responseWatson}}`,
        status: `{{statusWatson}}`
    }

    let watsonEntities = {}

    watsonEntities.found = false
    watsonEntities.entity = ""

    try {

        if (params.status != 200) {
            throw new Error('failed')
        }


        let response = JSON.parse(params.response)
        let size = response.entities.length

        for (i = 0; i < size; i++) {

            if (response.entities[i].entity == "imovel_cidade") {

                watsonEntities.city = response.entities[i].value
                watsonEntities.found = true
                break

            }
            
        }

    }
    catch (error) {
        watsonEntities.error = true
        watsonEntities.description = error.toString()
    }

    watsonEntities = JSON.stringify(watsonEntities)

    return watsonEntities
}