import React from 'react'
import {appRouter} from '../../routes/router'

class Spiels {
    fields = [
        {
            field_id : 1,
            field_name : 'customer_registration',
            fieldSettings : {
                personalInformationObj : {
                    firstname : '',
                    lastname : '',
                    contactnum : '',
                    address : ''
                },
                errorProvider : {
                    error_firstname : false,
                    error_lastname : false,
                    error_contactnum : false,
                    error_address : false
                },
                error_provider_message : {
                    epm_firstname : '',
                    epm_lastname : '',
                    epm_contactnum : '',
                    epm_address : ''
                }
            }
        },
        {
            field_id : 2,
            field_name : 'user_login',
            fieldSettings : {
                userLoginObj : {
                    email : '',
                    password : ''
                },
                message : '',
                router : {
                    // login : appRouter.devPlatform.path,
                    // Customer : appRouter.Customer.path,
                    Home : appRouter.Homepage.path
                },
                errorProvider : {
                    error_email : false,
                    error_password : false
                },
                error_provider_message : {
                    epm_email : '',
                    epm_password : ''
                }
            }
        }
    ]
}

export default new Spiels()