let myArr = [];
myArr[0] = 1;
myArr[1] = 2;
myArr[2] = 3;
// last elmnt of the arr
console.log(myArr[myArr.length - 1]); // god, gotta love java#

//now pushing so from [2]last element you create [3]

myArr.push("pushed value");

myArr.pop(); //removes last element

//this one saves you from a loop
myArr.unshift(0);
//removes first element and moves them back
myArr.shift();

//delete
delete myArr[1]
//splice 
myArr.splice(1,1) // myArr[1] was empty, now its 3(ignoring the previous calls)

