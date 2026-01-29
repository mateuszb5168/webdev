// DOM - Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2"); // # for id, . for class
view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("wiew"); // gets both wievs