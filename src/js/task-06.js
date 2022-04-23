
const refs = {
    input: document.querySelector('#validation-input')
 };

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputDataLength = refs.input.getAttribute('data-length');
    const inputValue = event.currentTarget.value.length;
  if (inputValue != inputDataLength) {
    refs.input.classList.remove('valid')
    return refs.input.classList.add('invalid')
  }
    refs.input.classList.remove('invalid')
    return refs.input.classList.add('valid') 
};

