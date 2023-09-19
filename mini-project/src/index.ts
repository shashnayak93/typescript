const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log("Submitted");
// })

function handleSubmit(e: SubmitEvent){
    e.preventDefault();
    console.log("Submitted");
}

form.addEventListener("submit",handleSubmit);

// btn.addEventListener("click", function(){
//     alert(input.value);
//     input.value="";

// });
