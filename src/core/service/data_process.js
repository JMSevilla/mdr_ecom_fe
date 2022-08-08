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
        data.append('contactnumber', obj.contactnum)
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
        data.append('projectfeatures', "pf")
        data.append('projectprice', obj.projectPricing)
        data.append('projecttype', obj.projectType)
        data.append("email", "test@gmail.com")
        return data
    }
}

export default new Process()