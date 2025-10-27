function sum(a, b) {
    return a + b;
}

function gUNFE(email) { //silly name
    return email.slice(0, email.indexOf("@"));
}

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); 
}

console.log(toProperCase('mAtEUSZ'));

