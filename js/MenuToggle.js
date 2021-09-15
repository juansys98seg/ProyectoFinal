const ToggleButton = document.getElementsByClassName('ToggleButton')[0]
const MenuFlex = document.getElementsByClassName('MenuFlex')[0]

ToggleButton.addEventListener('click', () => {
  MenuFlex.classList.toggle ('active')
})