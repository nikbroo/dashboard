import data from "./generated.json";

export const pagination = (page, limit) => {
    let pageData = [];
    for (let index = (page - 1)*limit; index < page*limit; index++) {    
        data[index] !== undefined && pageData.push(data[index]);
    }
    return pageData
}

