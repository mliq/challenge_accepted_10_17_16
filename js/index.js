'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', function onSubmit(event) {
    const errorElement = document.getElementsByClassName('input-error')[0];
    if (this.elements.value.value === 'front-end') {
        errorElement.style.display = 'none';
    } else {
        const inputFieldEl = document.getElementsByClassName('input-field_text')[0];
        errorElement.style.display = 'block';
        inputFieldEl.style.border = '1px solid #e84f4f';
        event.preventDefault();
    }
});
