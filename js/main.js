"use strict"

let email = document.querySelector(".input-email");
let phone = document.querySelector(".input-phone");
const button = document.querySelector(".button");

button.onclick = function() {

    function ValidEmail() {

        let emailValue = email.value;

        if (emailValue === null || emailValue.length === 0) {
            email.value = "denispolunosik@gmail.com";
        }
    }

    ValidEmail()
    
    function ValidPhone() {
        const re = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
        let phoneValue = phone.value;
        let valid = re.test(phoneValue);
        if (valid) {
            alert('Номер верный');
        } else {
            alert('Номер неверный');
        }
    }  

    setTimeout(ValidPhone, 1000);
}