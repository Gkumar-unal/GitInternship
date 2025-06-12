const state = document.querySelector('#state');
const district = document.querySelector('#district');
const address = document.querySelector('#address');
const form = document.querySelector('#form');

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    // Collect form data
    const formData = new FormData(form);

    // Send data via POST
    const result = await fetch('freeTextBox.php', {
        method: 'POST',
        body: formData
    });

    const response = await result.text();
    console.log(response);

    form.reset();
    clearSuccessStates();
});


// validate the inputs on events
state.addEventListener('change', () => {
    singleInput(state, 'Select one state');
});
district.addEventListener('input', () => {
    singleInput(district, 'Enter district');
});
address.addEventListener('input', () => {
    singleInput(address, 'Enter address');
});

function singleInput(element, message) {
    let isValid = true;
    if (element.value.trim() === '') {
        isValid = false;
        setError(element, message);
    } else {
        setSuccess(element);
    }
    return isValid;
}

function validateInputs() {
    let isValid = true;
    
    if (!singleInput(state, 'Select one state')) isValid = false;
    if (!singleInput(district, 'Enter district')) isValid = false;
    if (!singleInput(address, 'Enter address')) isValid = false;

    return isValid;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorMessage = inputGroup.querySelector('.error-message');
    errorMessage.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorMessage = inputGroup.querySelector('.error-message');
    errorMessage.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

function clearSuccessStates() {
    const inputGroups = document.querySelectorAll('.input-group');
    inputGroups.forEach(group => group.classList.remove('success'));
}
