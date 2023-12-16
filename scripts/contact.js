// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const button = document.getElementById("submit-button")
const mainpart = document.getElementById("contact-page")
const formelement = document.querySelector("form")
const h2remove = document.querySelector("h2")
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
console.log(button)
console.log(formelement)
console.log(h2remove)

document.addEventListener("DOMContentLoaded", function() {
    
    button.addEventListener("click", function(event){
        event.preventDefault();
        formelement.remove();
        h2remove.remove(); 
        let message = document.createElement("p");
        message.innerHTML = "Thank you for your message!"
        message.classList = "paragraph large-text";
        mainpart.append(message)
        
    });

});