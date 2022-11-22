import ApiConfig from "../api/common";
import { baseURLMiddlewareHelper } from "../middleware/url";
import Process from "./data_process";
class FormService {
  BUSINESS_verification_entry(obj) {
    const create_bo_vc_entry = ApiConfig.connect().post(
      "verification-entry",
      Process.BO_vc_entry(obj)
    );
    return create_bo_vc_entry;
  }
  BUSINESS_send_email(obj) {
    const send_bo_vc = ApiConfig.connect().get(
      `business-checkemail/${obj.email}/${obj.code}`
    );
    return send_bo_vc;
  }
  BUSINESS_resend_email(email, code) {
    const resend_bo_vc = ApiConfig.connect().get(
      `check-email-counts/${email}/${code}`
    );
    return resend_bo_vc;
  }
  BUSINESS_check_before_send(email) {
    return ApiConfig.connect().get(`check-before-sending/${email}`);
  }
  BUSINESS_check_email_verification(email) {
    return ApiConfig.connect().get(`check-email-verification/${email}`);
  }
  BUSINESS_update_with_send(obj) {
    return ApiConfig.connect().put(
      `business-update-with-send/${obj.email}/${obj.code}/`
    );
  }
  BUSINESS_compare_verification(obj) {
    return ApiConfig.connect().get(
      `compare-verification-code/${obj.email}/${obj.code}`
    );
  }
  BUSINESS_account_registration(obj) {
    return ApiConfig.connect().post(
      "businessowner/registration/",
      Process.BO_registration(obj)
    );
  }
  BUSINESS_project_creation(
    projectname,
    details,
    features,
    category,
    pricing,
    type,
    email
  ) {
    var data = new FormData();
    data.append("projectname", projectname);
    data.append("projectdetails", details);
    data.append("projectfeatures", JSON.stringify(features));
    data.append("projectcategory", category);
    data.append("projectprice", pricing);
    data.append("projecttype", type);
    data.append("email", email);
    return ApiConfig.connect().post("project-creation/", data);
  }
  BUSINESS_findAllAccountsByEmail(email) {
    return ApiConfig.connect().get(
      baseURLMiddlewareHelper("getall-businessbyemail", email)
    );
  }
  BUSINESS_findAllProjectByEmail(email) {
    return ApiConfig.connect().get(
      baseURLMiddlewareHelper("getall-projectbyemail", email)
    );
  }
  ADMINISTRATOR_checkadmin() {
    return ApiConfig.connect().get("check-admin");
  }
  ADMINISTRATOR_entry(obj) {
    return ApiConfig.connect().post(
      "admin-registration-entry",
      Process.ADMIN_user_entry(obj)
    );
  }
  BUSINESS_CONFIG_checkEmail(email) {
    return ApiConfig.connect().get(
      baseURLMiddlewareHelper("signup-config-check-email", email)
    );
  }
  CLIENT_CONFIG_checkLogin(obj) {
    const client_login_entry = ApiConfig.connect().post(
      "applogin",
      Process.CLIENT_user_login(obj)
    );
    return client_login_entry;
  }
  USER_checkLogin(id, token) {
    var data = new FormData();
    data.append("userid", id);
    data.append("token", token);
    return ApiConfig.connect().post("get-token", data);
  }
  SEND_EMAIL_contactUs(obj) {
    const emailForm_entry = ApiConfig.connect().post(
      "send-message/contactus",
      Process.CLIENT_email_sending(obj)
    );
    return emailForm_entry;
  }

  // STUDENT REGISTRATION //
  STUDENT_CONFIG_checkEmail(email) {
    return ApiConfig.connect().get(
      baseURLMiddlewareHelper("student-check-email", email)
    );
  }
  STUDENT_check_email_verification(email) {
    return ApiConfig.connect().get(`student-check-email-verification/${email}`);
  }
  STUDENT_update_with_send(obj) {
    return ApiConfig.connect().put(
      `student-update-with-send/${obj.email}/${obj.code}/`
    );
  }
  STUDENT_verification_entry(obj) {
    const create_st_vc_entry = ApiConfig.connect().post(
      "student-verification-entry",
      Process.ST_vc_entry(obj)
    );
    return create_st_vc_entry;
  }
  STUDENT_send_email(obj) {
    const send_st_vc = ApiConfig.connect().get(
      `student-checkemail/${obj.email}/${obj.code}`
    );
    return send_st_vc;
  }
  STUDENT_compare_verification(obj) {
    return ApiConfig.connect().get(
      `student-compare-verification-code/${obj.email}/${obj.code}`
    );
  }
  STUDENT_account_registration(obj) {
    return ApiConfig.connect().post(
      "student/registration/",
      Process.ST_registration(obj)
    );
  }
  STUDENT_project_creation(
    projectname,
    details,
    features,
    category,
    pricing,
    type,
    email
  ) {
    var data = new FormData();
    data.append("projectname", projectname);
    data.append("projectdetails", details);
    data.append("projectfeatures", JSON.stringify(features));
    data.append("projectcategory", category);
    data.append("projectprice", pricing);
    data.append("projecttype", type);
    data.append("email", email);
    return ApiConfig.connect().post("student-project-creation/", data);
  }
  STUDENT_findAllAccountsByEmail(email) {
    return ApiConfig.connect().get(
      baseURLMiddlewareHelper("getall-studentbyemail", email)
    );
  }
  STUDENT_findAllProjectByEmail(email) {
    return ApiConfig.connect().get(
      baseURLMiddlewareHelper("getall-projectbystudentemail", email)
    );
  }
  STUDENT_resend_email(email, code) {
    const resend_st_vc = ApiConfig.connect().get(
      `student-verification-counts-before-update/${email}/${code}`
    );
    return resend_st_vc;
  }
  ACCOUNT_signout(object) {
    const account_signout = ApiConfig.connect().post(
      "signout/",
      Process.ADMIN_SIGNOUT(object)
    );
    return account_signout;
  }
  BO_ACCOUNT_signout(object) {
    const account_signout = ApiConfig.connect().post(
      "signout_bo/",
      Process.BO_SIGNOUT(object)
    );
    return account_signout;
  }
  ACCOUNT_route_protection(object) {
    var data = new FormData();
    data.append("key", object.key);
    data.append("token", object.token);
    const response = ApiConfig.connect().post("protection-route", data);
    return response;
  }
  SETTINGS_PRODUCT_ADD_CATEGORY(prodname) {
    var data = new FormData();
    data.append("categoryName", prodname);
    const response = ApiConfig.connect().post("product-category/add", data);
    return response;
  }
  SETTINGS_PRODUCT_GETALL_CATEGORIES() {
    const response = ApiConfig.connect().get("product-category/all");
    return response;
  }
  SETTINGS_PRODUCT_DELETE_CATEGORY(id) {
    const response = ApiConfig.connect().delete(
      `product-category/delete-category/${id}/`
    );
    return response;
  }
}

export default new FormService();
