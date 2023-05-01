const pass = document.querySelector("#pass");
const numOfChars = document.querySelector(".signs")
const bigLetters = document.querySelector(".big-letter")
const specialChar = document.querySelector(".special-char")
const numbers = document.querySelector(".number")
const eye = document.querySelector(".eye")
const form = document.querySelector("form")
const button = document.querySelector("button")

let charCheck = false;
let numCheck = false;
let specialCharCheck = false;
let bigLetterCheck = false;

const xd = () => {
    let znaki = pass.value;

    let hasUppercase = znaki.match(/[A-Z]/);
    let hasSpecialChar = znaki.match(/[^\w\s]{2,}/);
    let hasNumbers = znaki.match(/\d{3,}/);

    if (znaki.length >= 7) {
        numOfChars.style.color = "lightgreen";
        charCheck = true;
    } else {
        numOfChars.style.color = "red";
        charCheck = false;
    }

    

    if (hasUppercase) {
        bigLetters.style.color = "lightgreen";
        bigLetterCheck = true;
    } else {
        bigLetters.style.color = "red";
        bigLetterCheck = false;
    }

    if (hasSpecialChar) {
        specialChar.style.color = "lightgreen";
        specialCharCheck = true;
    } else {
        specialChar.style.color = "red";
        specialCharCheck = false;
    }

    if (hasNumbers) {
        numbers.style.color = "lightgreen";
        numCheck = true;
    } else {
        numbers.style.color = "red"
        numCheck = false;
    }

    if (numCheck &&  specialCharCheck && bigLetterCheck && charCheck) {
        form.style.borderColor = "lightgreen";
        button.classList.add("open")
    } else {
        form.style.borderColor = "#fff";
        button.classList.remove("open")
    }
}

// POGLAD HASLA

let isShow = false;
eye.addEventListener("click", () => {
    if(isShow) {
        pass.setAttribute("type", "password");
        isShow = false;
        eye.style.color = "#767676"
    } else {
        pass.setAttribute("type", "text")
        isShow = true;
        eye.style.color = "black"
    }
})