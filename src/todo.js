const todoFactory = (task)=>{

    let status = "active";

    let getTask = ()=>{
        return task
    }

    let getStatus = ()=>{
        return status
    }

    let setStatus = (change)=>{
        status = change
    }

    let serialize = ()=>{
        let properties = {
            task: getTask(),
            status: getStatus()
        }
        return properties
    }

    return {
        getTask, getStatus, setStatus, serialize
    }
}

export {todoFactory}