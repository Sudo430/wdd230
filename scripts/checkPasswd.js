const pass1 = document.querySelector("#passwd1");
const pass2 = document.querySelector("#passwd2");
const feedback = document.querySelector("#passwd-msg");

pass2.addEventListener('focusout', () => {
    if(pass1.value === pass2.value){
        feedback.textContent = "";

    }
    else{
        feedback.textContent = "Passwords don't match, please try again.";
        pass1.value = "";
        pass2.value = "";
        pass1.focus();
    }
});