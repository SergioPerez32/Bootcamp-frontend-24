function findUnpairedElement(array) {
    const counter = {};
    array.forEach(element => {
        counter[element] = (counter[element] || 0) + 1;
    });
    for (const key in counter) {
        if (counter.hasOwnProperty(key) && counter[key] === 1) {
            return key;
        }
    }
    return null;
}

const array1=[1,2,3,4,7,4,3,2,1]
console.log(findUnpairedElement(array1))