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

    return {
        getTask, getStatus, setStatus
    }
}

export {todoFactory}