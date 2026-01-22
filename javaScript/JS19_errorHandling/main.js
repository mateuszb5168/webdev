

"use strict"; //catches more errors

// variable = "name"; when not strict not error
// console.log(variable); 

const makeError = () => {
    try  {
        // const name = "dave";
        // name = "Joe";
		throw new customError("this is a custom error!");
    }	
	catch(err) {
		console.error(err.name);
		console.error(err.stack);
		console.warn(err.message); //a short error
		//logTheError(err.stack) - apparently useful, ok
    }
}

function customError(message) {
	this.message = message;
	this.name = "CustomError";
	this.stack = `${this.name} : ${this.stack}`;
}

makeError();
