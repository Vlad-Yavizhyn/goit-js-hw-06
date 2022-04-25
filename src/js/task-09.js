const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  btnChangeColor: document.querySelector('.change-color'),
  textColor: document.querySelector('.color'),
}

function onClickBtn() {
  refs.textColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}

refs.btnChangeColor.addEventListener('click', onClickBtn);
