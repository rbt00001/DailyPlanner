console.log("hello")
let time = document.querySelector(".time");
const events = document.querySelector(".eventContent");
// let saveBtn = document.getElementById("7")
const dateDis = document.querySelector(".dateDisplay");

const date = new Date();
console.log(date)

document.getElementById("dateDisplay").innerHTML = date.toLocaleDateString();

$("#7").on("click", (e) => {
   // $("#7").prev().child();
    console.log( $("#7input").val())
    localStorage.setItem("7", $("#7input").val() )
})

/*
saveBtn.addEventListener("click", (e) => {
    console.log("I work")

}) */