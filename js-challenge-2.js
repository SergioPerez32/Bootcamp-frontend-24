const arr1 = [12,6,10,2,45,100];

function smallestNumber (array){
    return Math.min(...array);
}

console.log(smallestNumber(arr1))

const arr2 = [3,'c','c','a',3,'c',3,'c',9,9]

function rarestFromArray(arr) {
    var arrMap = arr.reduce(function(obj, val) {
      obj[val] = ++obj[val] || 1;
      return obj;
    }, {});
    var rarest = Object.keys(arrMap)[0];
    for (key in arrMap) {
      rarest = arrMap[rarest] > arrMap[key] ? key : rarest;
    }
    return rarest;
  }


console.log(rarestFromArray(arr2))
console.log(rarestFromArray(arr1))

function removeDuplicates(array) {
  return array.reduce((accumulator, currentValue) => {
      if (!accumulator.includes(currentValue)) {
          accumulator.push(currentValue);
      }
      return accumulator;
  }, []);
}

const arr3=[7,9,1,'a','a','f',9,4,2,'d','d']
console.log(removeDuplicates(arr3))

function concatenateArrays(arrays) {
  const concatenatedArray = arrays.reduce((accumulator, currenteValue) => {
      return accumulator.concat(currenteValue);
  }, []);
  return concatenatedArray.join(' ')
}

const arr4 = [['The','little','horse'],['Plane','over','the','ocean'],['Chocolate','ice','cream','is','awesome'],['This','is','a','long','sentence']]
console.log(concatenateArrays(arr4))

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

function delay(ms){
  return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve();
      }, ms)
  })
}

delay(3000).then(()=>{console.log('run after 3 seconds')})