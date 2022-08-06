var data = new FormData()

class Process {
    BO_vc_entry(obj){
        data.append('email', obj.email)
        data.append('code', obj.code)
        return data;
    }
}

export default new Process()