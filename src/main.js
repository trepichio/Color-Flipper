const links = document.querySelector('.nav-links')

links.addEventListener('click', (e) => {
  if (e.target === links) return

  Array.from(links.children).forEach(link => {
    link.classList.remove('link-active')
    if (link === e.target) e.target.classList.add('link-active');
  })
})

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

const btnClickMe = document.querySelector('#click-me')

btnClickMe.addEventListener('click', (e) => {
  const root = document.documentElement
  const colorTag = document.querySelector('#color-tag')

  const randomColor = getRandomColor()
  colorTag.textContent = randomColor
  root.style.setProperty('--background-chosen-color', randomColor)
})
