//all elememts

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#comfrimPassword");
const form = document.querySelector("#form");

const showError = (input,message) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i") [0];
    const erroIcon = parentElement.querySelectorAll("i") [1];

    erroIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = message;  
}

const showSuccess = (input) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i") [0];
    const erroIcon = parentElement.querySelectorAll("i") [1];

    erroIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
}

const checkEmpty = (elememts) => {

    elememts.forEach( (elememt) => {
        if(elememt.value === ''){
            showError(elememt, 'Input required');
        }else {
            showSuccess(elememt)
        }
    })
}


form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkEmpty( [username,email,password, confirmPassword]);

});
