'use strict';

const form = document.querySelector('form');
const EXPECTED_INPUT = 'front-end';
const DISPLAY_NONE = 'none';
const DISPLAY_BLOCK = 'block';
const ERROR_BORDER = '1px solid #e84f4f';

form.addEventListener('submit', function onSubmit(event) {
    const errorElement = document.getElementsByClassName('input-error')[0];
    const inputValue = this.elements.value.value;
    const inputFieldEl = document.getElementsByClassName('input-field_text')[0];

    if (inputValue === EXPECTED_INPUT) {
        errorElement.style.display = DISPLAY_NONE;
    } else {
        errorElement.style.display = DISPLAY_BLOCK;
        inputFieldEl.style.border = ERROR_BORDER;
        event.preventDefault();
    }
});
