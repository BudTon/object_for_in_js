// const { pushResultList } = require('./pushResultList');
import { pushResultList } from './pushResultList.js'

export function orderByProps(obj, firstKeyList) {
    const resultList = [];
    const sortedKeyList = Object.keys(obj).sort()
    firstKeyList.forEach(key => {
        let index = sortedKeyList.indexOf(key);
        sortedKeyList.splice(index, 1);
    });
    pushResultList(obj, resultList, firstKeyList)
    pushResultList(obj, resultList, sortedKeyList)
    return resultList
}

// module.exports = { orderByProps }