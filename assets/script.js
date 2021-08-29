
let time = document.querySelector(".time");
var events = document.querySelector(".eventContent");
let saveBtn = document.getElementById(".save")
const dateDis = document.querySelector(".dateDisplay");

const date = new Date();
console.log(date)

document.getElementById("dateDisplay").innerHTML = date.toLocaleDateString();

$("#7").on("click", (e) => {
   // $("#7").prev().child();
    console.log( $("#7input").val())
    localStorage.setItem("7", $("#7input").val() )
})

// Local storage Get item (console log to see if item exists)

saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
       
  
    // set new submission to local storage 
    localStorage.setItem("save", JSON.stringify(save));
    
  });
  

// Set saved to local storage set to input 

// Bonus ** Data-Attribute to connect save buttons