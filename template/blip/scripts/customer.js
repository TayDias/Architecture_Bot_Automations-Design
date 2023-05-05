function run()
{
    const config = JSON.parse(`{{config}}`)
    
    const customer = {
        name : {
            required : true,
            filled    : false
        },
        document : {
            required : false,
            filled    : false,
            type     : "cpf"
        },
        email : {
            required : true,
            filled    : false
        },
        phone : {
            required : (config.channel != "WhatsApp" ? true : false),
            filled    : (config.channel != "WhatsApp" ? false : true),
            main:  {
                full:  (config.channel != "WhatsApp" ? "" : "{{phoneNumber}}")
            }
        }
    }
    
    return customer
}
