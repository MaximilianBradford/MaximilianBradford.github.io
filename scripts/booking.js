/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailycost =  0
let dayCounter = 0
let calccost = 0
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const clearbutton = document.getElementById("clear-button");
const full = document.getElementById("full");
const half = document.getElementById("half");
const weeklycost = document.getElementById("calculated-cost")
const list = [monday, tuesday, wednesday, thursday, friday];




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
// document.addEventListener("DOMContentLoaded", function(event) {

monday.addEventListener('click', function(){
    monday.classList.add("clicked")
    daycounterfunc()
});
tuesday.addEventListener('click', function(){
    tuesday.classList.add("clicked")
    daycounterfunc()
});
wednesday.addEventListener('click', function(){
    wednesday.classList.add("clicked")
    daycounterfunc()
});
thursday.addEventListener('click', function(){
    thursday.classList.add("clicked")
    daycounterfunc()
});
friday.addEventListener('click', function(){
    friday.classList.add("clicked")
    daycounterfunc()
});
function daycounterfunc(){
    dayCounter = 0
    for (let i = 0; i <= 4; i++){
        if ((list[i].classList.contains("clicked")) == true){
            // console.log(list[i])
            dayCounter++ 
            // console.log("round")    
        };
    // console.log(dayCounter)
    }
}
    
        
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearbutton.addEventListener('click', function(){
    for (let i = 0; i <= 4; i++){
        if ((list[i].classList.contains("clicked")) == true){
            list[i].classList.remove("clicked")   
        };
    }
    dailycost = 0
    dayCounter= 0
    calccost = 0
    recalculate()
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.addEventListener('click', function(){
    dailycost = 20
    half.classList.add("clicked")
    full.classList.remove("clicked")
    recalculate()
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full.addEventListener('click', function(){
    dailycost = 35
    full.classList.add("clicked")
    half.classList.remove("clicked")
    recalculate()
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
    calccost = dayCounter*dailycost
    console.log(calccost)
    weeklycost.innerHTML = calccost
};

