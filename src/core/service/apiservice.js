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
}

export default new FormService()