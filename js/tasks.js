const numberCells = 3;
const valueToFill = 'a';

const getArray = (arraySize, value) => {
    const array = [];
    array.length = arraySize;
    array.fill(value);
    return array
    
}
console.log(getArray(numberCells, valueToFill));




const newArray = [0, 1, false, 2, undefined, '', 3, null];

const removeValues = () => { 
    const changeArray = newArray.filter(Boolean);
    return changeArray
}
console.log(removeValues());




const dataSet = [['a', 1], ['b', 2]];

const returnObject = (arrayData) => {
    const objectData = Object.fromEntries(arrayData);
    return objectData
}
console.log(returnObject(dataSet));

