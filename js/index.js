'use strict';

const EXPECTED_INPUT = 'front-end';
const DISPLAY_NONE = 'none';
const DISPLAY_BLOCK = 'block';
const ERROR_BORDER = '1px solid #e84f4f';
const ERROR_COLOR = '#e84f4f';
const ERROR_CLASS = 'input-error';
const TEXT_INPUT_CLASS = 'input-field_text';

const form = document.querySelector('form');

function onSubmit(event) {
    const errorElement = document.getElementsByClassName(ERROR_CLASS)[0];
    const inputValue = this.elements.value.value;
    const inputFieldEl = document.getElementsByClassName(TEXT_INPUT_CLASS)[0];

    if (inputValue === EXPECTED_INPUT) {
        errorElement.style.display = DISPLAY_NONE;
    } else {
        errorElement.style.display = DISPLAY_BLOCK;
        errorElement.style.color = ERROR_COLOR;
        inputFieldEl.style.border = ERROR_BORDER;

        event.preventDefault();
    }
}

form.addEventListener('submit', onSubmit);
