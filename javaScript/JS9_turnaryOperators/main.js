//syntax

//condition ? ifTrue : ifFalse;

let soup = "chiken noodle soup";
let response = soup ? "yes, we have soup" : "Sorry, we dont have soup";

let isCustomerBanned = true;
let soupAccess = isCustomerBanned
  ? "sorry, no soup for you" : soup
  ? `yeah! we do have ${soup}.` : "sorry! we dont have soup.";

//syntax:
// && == and