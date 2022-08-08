import ApiConfig from '../api/common'
import {baseURLMiddlewareHelper} from '../middleware/url'
import Process from './data_process'
class FormService {
    BUSINESS_verification_entry(obj){
        const create_bo_vc_entry = ApiConfig.connect().post(
            'verification-entry', Process.BO_vc_entry(obj)
        )
        return create_bo_vc_entry
    }
    BUSINESS_send_email(obj){
        const send_bo_vc = ApiConfig.connect().get(
            `business-checkemail/${obj.email}/${obj.code}`
        )
        return send_bo_vc
    }
    BUSINESS_resend_email(email, code){
        const resend_bo_vc = ApiConfig.connect().get(
            `check-email-counts/${email}/${code}`
        )
        return resend_bo_vc
    }
    BUSINESS_check_before_send(email){
        return ApiConfig.connect().get(
            `check-before-sending/${email}`
        )
    }
    BUSINESS_check_email_verification(email){
        return ApiConfig.connect().get(
            `check-email-verification/${email}`
        )
    }
    BUSINESS_update_with_send(obj){
        return ApiConfig.connect().put(
            `business-update-with-send/${obj.email}/${obj.code}/`
        )
    }
}

export default new FormService()