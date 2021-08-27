let time = document.querySelector(".time");
const events = document.querySelector(".events");
const save = document.querySelector(".save");
const dateDis = document.querySelector(".dateDisplay");

const date = new Date();
console.log(date)

document.getElementById("dateDisplay").innerHTML = date.toLocaleDateString();