//Objects:
//An Object is a variable that can hold many variables. Objects are collections of key-value pairs

const obj = { personsNumber : 9};

const otherObj = { 
    string1: "string",
    number2: 2,
    hobbies: [x, y, z],
    beverage: {
        morning: "coffee",
        day: "tea",
    },
    action: function() {
        return `Time for ${this.beverage.morning}`; //$this refers to the object
    }
};

//Object.create(inherit) not sure haha

console.log(otherObj.beverage.morning)

console.log(otherObj.action())