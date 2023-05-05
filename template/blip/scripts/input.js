function run(params) 
{
    params = {
        currentId   : `{{state.id}}`,
        previousId  : `{{state.previous.id}}`,
        config      : `{{config}}`,
        list        : `{{options}}`,
        input       : `{{input.content}}`,
        retry       : `{{input@erro.retry}}`
    }

    try 
    {
        
        if(params === undefined)
            throw Error('Falta parametro de entrada')


        const config = JSON.parse(params.config)
        const input   = params.input.toString()
        let list    = JSON.parse(params.list)
        let checkAdvisor = false
        
        let incorretOption  = true
        let optionChosed = {}

        const isALastTry    = (params.retry == 2)
        const isInSecondTry = (params.retry == 1)
        const isInFirstTry  = (params.retry === "")
        
        
        if(wantsToGetOut(input))
			return{exist : true,retry : 3,id : 'Desistente',message : 'encerrar'}
				
		if(wantsHuman(input))
			return{exist : true, retry : 3, id : 'Transbordo',message : 'humano'}


        
        if (config.channel == "Chat") { // Não tem menu numérico

            list.forEach((element, index) => {
                if (input.match(new RegExp(element.option, 'i')) || element.option.match(new RegExp(input, 'i'))) {
                    optionChosed = { option: element.option, index: element.index, id: element.idBitrix }
                    incorretOption = false
                }
            })

        } 
        else {

            list.forEach((element, index) => {
                if (input.match(new RegExp(element.option, 'i')) || input.match(new RegExp(element.index, 'i')) || element.option.match(new RegExp(input, 'i'))) {
                    optionChosed = { option: element.option, index: element.index, id: element.idBitrix }
                    incorretOption = false
                }
            })

        }

        
        if(incorretOption)
        {
            if(isALastTry)
                return{
                    erro :{
                        exist   : true,
                        retry   : 3,
                        id      : '3x erro'
                    }
                }
            
            if(isInSecondTry)
                return {
                    erro: {
                        exist: true,
                        retry : 2,
                        message: `{{config@emoji.secondErro}} {{messages@secondErro}}`,
                        id : '2x erro'
                    }
                }
            
            if(isInFirstTry)
                return {
                    erro: {
                        exist: true,
                        retry : 1,
                        message: `{{config@emoji.firstErro}} {{messages@firstErro}}`,
                        id : '1x erro'
                    },
                    
                }
        }    
        
        return {
            erro : { 
                exist : false 
            },
            checkAdvisor: checkAdvisor,
            chosed : optionChosed
        }
    } 
    catch (error) 
    {
        return {
            exist   : true,
            message : '❌ ' + error.toString() + ' ❌',
            retry   : 3,
            id      : error.toString()
        }
    }
}

function wantsToGetOut(input) 
{
    let regexp = `{{config@regex.forLeave}}`
    if(input == 'encerrar' || input.match(new RegExp(regexp, 'i')) )
        return true
    return false
}

function wantsHuman(input)
{
    let regexp = `{{config@regex.forHuman}}`
    if(input == 'humano' || input.match(new RegExp(regexp, 'i')) )
        return true
    return false
}
