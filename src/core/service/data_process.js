var data = new FormData()

class Process {
    BO_vc_entry(obj){
        data.append('email', obj.email)
        data.append('code', obj.code)
        return data;
    }
    BO_registration(obj){
        data.append('firstname', obj.firstname)
        data.append('lastname', obj.lastname)
        data.append('contactnumber', obj.contactnumber)
        data.append('address', obj.address)
        data.append('email', obj.email)
        data.append('password', obj.password)
        data.append('isverified', '0')
        data.append('sec_question', obj.sec_question)
        data.append('sec_answer', obj.sec_answer)
        return data
    }
    BO_project_creation(obj){
        data.append('projectname', obj.projectName)
        data.append('projectdetails', "No project details")
        data.append('projectfeatures', obj.features)
        data.append('projectcategory', obj.projectCategory)
        data.append('projectprice', obj.projectPricing)
        data.append('projecttype', obj.projectType)
        data.append("email", obj.email)
        return data
    }
    ADMIN_user_entry(obj){
        data.append('firstname', obj.firstname)
        data.append('lastname', obj.lastname)
        data.append('email', obj.email)
        data.append('password', obj.password)
        return data
    }
    CLIENT_user_login(obj){
        data.append('email', obj.email)
        data.append('password', obj.password)
        data.append('ct', obj.loginAs)
        return data
    }
    CLIENT_email_sending(obj){
        data.append('fullname', obj.fullname)
        data.append('email', obj.email)
        data.append('subject', obj.subject)
        data.append('message', obj.message)
        return data
    }
    USER_checktokenization(uid){
        data.append('userid', uid)
        return data
    }
}

export default new Process()