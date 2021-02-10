
// given a sorted array of integers, write a function called search, 
// that accepts a value and returns the index where the value passsed to the 
// fuction is located. if the value is not found, return -1 

// 1 2 3 
// divide and search 
const search = (arr, search) => {
    let middle = arr.length / 2;
    let copied = arr;
    for (const item of arr) {
        console.log(copied[middle], search)
        if(copied[middle] === search){
            return middle
        } 
        if(copied.length === 1) {
            return -1
        }
        if(copied[middle] < search){
            let sliced = copied.slice(middle)
            copied = sliced
            middle = Math.floor(copied.legnth / 2)
            console.log("middle :", sliced.legnth)

        } else {
            let sliced = copied.slice(0, middle)
            middle = Math.floor(sliced.legnth / 2)
        }
    }

}

console.log("result is :", search([1, 2,3 ,4 ,5 ,6], 5))