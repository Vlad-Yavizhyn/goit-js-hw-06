const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output')
};

refs.inputEl.addEventListener('input', onInputChange);
function onInputChange(event) { 
    event.currentTarget.value;
    refs.outputEl.textContent = event.currentTarget.value
    if (refs.inputEl.value !== "") { refs.outputEl.textContent = event.currentTarget.value; }
    else { refs.outputEl.textContent = "Anonymous" }
};
