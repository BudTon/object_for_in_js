export function pushResultList(obj, resultList, pushKeyList) {
    pushKeyList.forEach(key => {
        for (const keyObj in obj) {
            if (keyObj === key) {
                resultList.push({ key: key, value: obj[key] });
            }
        }        
    });
    return resultList
}

// module.exports = { pushResultList }