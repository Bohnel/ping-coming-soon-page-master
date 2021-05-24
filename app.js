let button = document.querySelector("#notifyBtn")
let input = document.querySelector("input")
var invalid = false; 
button.addEventListener("click", () => {
    let email = input.value;
    let tag = document.createElement("p")
    let text = document.createTextNode("Please provide a valid email address")
    tag.id = "invalidLb"
    let lab = document.getElementById("invalidLb")
    let inp = document.querySelector(".inp")
    
    if(validateEmail(email)) {
        console.log(invalid);
        if (invalid === true) {
            input.classList.remove("invalid");
            lab.remove();
        }
        invalid = false;
    } else {
        if (invalid === false) {
            console.log(invalid);
            input.classList.add("invalid");
            tag.appendChild(text)
            inp.appendChild(tag)
        }
        invalid = true;
    }
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}