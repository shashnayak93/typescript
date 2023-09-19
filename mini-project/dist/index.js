"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log("Submitted");
// })
function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function(){
//     alert(input.value);
//     input.value="";
// });
