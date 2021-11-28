const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

// Results for the tinyArray
// insert 39.7 μs
// append 91.4 μs
const tinyArray = getSizedArray(10);

// Results for the smallArray
// insert 50.1 μs
// append 101.9 μs
const smallArray = getSizedArray(100);

// Results for the mediumArray
// insert 178.2 μs
// append 145.1 μs
const mediumArray = getSizedArray(1000);

// Results for the largeArray
// insert 10.8145 ms
// append 559.6 μs
const largeArray = getSizedArray(10000);

// Results for the extraLargeArray
// insert 1.2190862 s
// append 3.1921 ms
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
