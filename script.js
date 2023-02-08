console.log('script running');

const submitButton = document.querySelector("button[type='submit']");

// "input[id='confirm-pwd']", "input[id='password']"

function checkPassword() {
    const password = document.getElementById("password");
    const password_match = document.getElementById("confirm-pwd");

    if (password.value !== password_match.value){
        password_match.setCustomValidity("Passwords do not match.");
    }
    else {
        password_match.setCustomValidity("");
    }

    console.log(password.value, password_match.value);
    
}
console.log(submitButton);
submitButton.addEventListener('click', checkPassword);