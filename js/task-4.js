const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', submitForm);

function submitForm(item) {
    item.preventDefault();
    const formElem = item.target;
    const userEmail = formElem.elements.email.value;
    const userPassword = formElem.elements.password.value;
    if (userEmail === "" || userPassword === "") {
        return alert('All form fields must be filled in');
    }
    const obj = {
        userEmail: userEmail.trim(),
        userPassword: userPassword.trim(),
    };
    console.log(obj);

    formElem.reset();
}





