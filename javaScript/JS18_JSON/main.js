const myObj = {
    name: "matt",
    hobbies: ["insert", "cringy", "text"],
    hello: function() {
        console.log("hi! bad day today.");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);// no hello function, json doesnt send functions 
console.log(typeof sendJSON);
console.log(sendJSON.name); //undefined, the variable is a string not object 
const recieveJSON = JSON.parse(sendJSON);//convert to object
console.log(recieveJSON);

//i guess these were only the basics, alright