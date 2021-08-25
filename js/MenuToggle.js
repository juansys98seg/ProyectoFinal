const toggleButton = document.getElementsByClassName('ToggleButton')[0]
const navbarLinks = document.getElementsByClassName('MenuFlex')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})