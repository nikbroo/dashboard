import data from "./generated.json";

export const pagination = (page, limit, status, dep) => {
    let pageData = [];
    let newData = [];
    for(let i of data){
        if(status.includes(i.Status) && dep.includes(i.Department)){
            newData.push(i)
        }
    }
    for (let index = (page - 1)*limit; index < page*limit; index++) {    
        newData[index] !== undefined && pageData.push(newData[index]);
    }
    return {pageData, newData}
}

