function run(params) {
    params = {
        input: `{{input}}`
    }

    try {
        if (params == undefined)
            throw new Error(`Error: Falta parametro de entrada`)


        if (`{{input@erro.exist}}` == "true") {
            return ""
        }

    }
    catch (error) {
        return error.toString()
    }

    return "{{messages@welcome}}"
}