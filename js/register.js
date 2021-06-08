const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const birthday = document.getElementById('birthday');

form.addEventListener('submit', (e) => {
    registration(e);
});

function registration(e) {
    var passwordExpression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,15}$/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var birthdayRegex = /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/;
    if (firstName.value.trim() == '') {
        alert('Please enter your name');
        e.preventDefault();
    }
    if (!letters.test(firstName.value)) {
        alert('Name field required only alphabet characters');
        e.preventDefault();
    }
    if (surname.value.trim() == '') {
        alert('Please enter your surname');
        e.preventDefault();
    }
    if (!letters.test(surname.value)) {
        alert('Surname field required only alphabet characters');
        e.preventDefault();
    }
    if (email.value.trim() == '') {
        alert('Please enter your email ');
        e.preventDefault();
    }
    if (!filter.test(email.value)) {
        alert('Invalid email');
        e.preventDefault();
    }
    var passwordValue = password.value;
    if (passwordValue.trim() == '') {
        alert('Please enter a password');
        e.preventDefault();
    }
    if (!passwordExpression.test(passwordValue)) {
        alert('Your password does not holds the requirements');
        e.preventDefault();
    }
    if (birthday.value == '') {
        alert('Please enter birthday');
        e.preventDefault();
    }
    if (!birthdayRegex.test(birthday.value)) {
        alert('Please enter a birthday such properly fits into the expression given in the form');
        e.preventDefault();
    }
    const isValidBirthDay = new Date(birthday.value.replace(birthdayRegex, "$3-$2-$1"));
    if (isNaN(isValidBirthDay)) {
        alert('There is not such a birthday');
        e.preventDefault();
    }

}