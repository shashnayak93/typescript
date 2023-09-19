"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log("Submitted");
// })
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = input.value;
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(newTodo);
    newLI.append(checkbox);
    list.append(newLI);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function(){
//     alert(input.value);
//     input.value="";
// });
