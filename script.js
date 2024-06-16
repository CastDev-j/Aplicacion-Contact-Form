
const button = document.querySelector('#submit-button');
const inputFirstName = document.querySelector('#first-name');
const inputLastName = document.querySelector('#last-name');
const inputEmail = document.querySelector('#email');


const queryRadios = document.getElementsByName('query');
let selectedValue;

const textAreaMessage = document.querySelector('#textarea-input');
const acceptTerms = document.querySelector('#final-checkbox');

const firstNameError = document.querySelector('#fn-error');
const lastNameError = document.querySelector('#ln-error');
const emailError = document.querySelector('#email-error');
const queryError = document.querySelector('#query-error');
const messageError = document.querySelector('#message-error');
const acceptTermsError = document.querySelector('#consent-error');

const successMessage = document.querySelector('#success-message');

function setFieldError(field) {
    field.classList.add('error-input');
}

function setFieldErrorText(field) {
    field.classList.add('error-text');
}

function setFieldSuccess(field) {
    field.classList.remove('error-input');
}
function setFieldSuccessText(field) {
    field.classList.remove('error-text');
}

function validateForm() {


    if (inNameValid(inputFirstName.value)) {
        console.log('First Name is empty');
        setFieldError(inputFirstName);
        setFieldErrorText(firstNameError);
    } else {
        setFieldSuccess(inputFirstName);
        setFieldSuccessText(firstNameError);
    }

    if (isLastNameValid(inputLastName.value)) {
        console.log('Last Name is empty');
        setFieldError(inputLastName);
        setFieldErrorText(lastNameError);
    } else {
        setFieldSuccess(inputLastName);
        setFieldSuccessText(lastNameError);
    }

    if (isEmailValid(inputEmail.value)) {
        console.log('Email is empty');
        setFieldError(inputEmail);
        setFieldErrorText(emailError);
    } else {
        setFieldSuccess(inputEmail);
        setFieldSuccessText(emailError);
    }

    queryRadios.forEach(radio => {
        if (radio.checked) {
            selectedValue = radio.value;
        }
    });

    if (isQueryValid(selectedValue)) {
        console.log('Query is empty');
        queryRadios.forEach(radio => {
            setFieldError(radio);
            setFieldErrorText(queryError);
        });
    } else {
        queryRadios.forEach(radio => {
            setFieldSuccess(radio);
            setFieldSuccessText(queryError);
        });
    }



    if (isMessageValid(textAreaMessage.value)) {
        console.log('Message is empty');
        setFieldError(textAreaMessage);
        setFieldErrorText(messageError);
    } else {
        setFieldSuccess(textAreaMessage);
        setFieldSuccessText(messageError);
    }

    if (isAcceptTermsValid(acceptTerms.checked)) {
        console.log('Accept terms is empty');
        setFieldError(acceptTerms);
        setFieldErrorText(acceptTermsError);
    } else {
        setFieldSuccess(acceptTerms);
        setFieldSuccessText(acceptTermsError);
    }


    if (!inNameValid(inputFirstName.value) && !isLastNameValid(inputLastName.value) && !isEmailValid(inputEmail.value) && !isQueryValid(selectedValue) && !isMessageValid(textAreaMessage.value) && !isAcceptTermsValid(acceptTerms.checked)) {
        console.log('Form is valid');

        successMessage.classList.add('success-message');

        setTimeout(() => {
            successMessage.classList.remove('success-message');
        }, 1000);

        inputFirstName.value = '';
        inputLastName.value = '';
        inputEmail.value = '';
        textAreaMessage.value = '';
        acceptTerms.checked = false;

        queryRadios.forEach(radio => {
            radio.checked = false;
        });


    } else {
        console.log('Form is invalid');
    }
}

button.addEventListener('click', validateForm);

// agregar la funcionalidad que al hacer click en cualquier input se reinicien los errores

inputFirstName.addEventListener('click', () => {
    setFieldSuccess(inputFirstName);
    setFieldSuccessText(firstNameError);
});

inputLastName.addEventListener('click', () => {
    setFieldSuccess(inputLastName);
    setFieldSuccessText(lastNameError);
});

inputEmail.addEventListener('click', () => {
    setFieldSuccess(inputEmail);
    setFieldSuccessText(emailError);
});

queryRadios.forEach(radio => {
    radio.addEventListener('click', () => {
        queryRadios.forEach(radio => {
            setFieldSuccess(radio)
            setFieldSuccessText(queryError)
        });
    });
});

textAreaMessage.addEventListener('click', () => {
    setFieldSuccess(textAreaMessage);
    setFieldSuccessText(messageError);
});

acceptTerms.addEventListener('click', () => {
    setFieldSuccess(acceptTerms);
    setFieldSuccessText(acceptTermsError);
});

function inNameValid(name) {
    return name === '';
}

function isLastNameValid(lastName) {
    return lastName === '';
}

function isEmailValid(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(email);
}

function isQueryValid(query) {
    return query === undefined;
}

function isMessageValid(message) {
    return message === '';
}

function isAcceptTermsValid(acceptTerms) {
    return !acceptTerms;
}





