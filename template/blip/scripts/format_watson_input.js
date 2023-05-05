function run() {

    params = {
        input: `{{input.content}}`,
    }

    let formattedInput = params.input

    try {

        formattedInput = formattedInput.replace(/\n/g, ' ').replace(/\r/g, '').replace(/\t/g, ' ')

    }
    catch (error) {
        return ""
    }

    return formattedInput
}