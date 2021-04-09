function simpleHandler() {
  const colors = ['green', 'red', 'rgba(125, 243,155)', '#f1523ffe']

  const randomNumber = Math.floor(Math.random() * colors.length)
  return colors[randomNumber]
}

function hexHandler() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

const modes = {
  'simple': simpleHandler,
  'hex': hexHandler,
}


const links = document.querySelector('.nav-links')

links.addEventListener('click', (e) => {
  if (e.target === links) return

  Array.from(links.children).forEach(link => {
    link.classList.remove('link-active')
    if (link === e.target) e.target.classList.add('link-active');
  })
})

const btnClickMe = document.querySelector('#click-me')

btnClickMe.addEventListener('click', (e) => {
  const root = document.documentElement
  const colorTag = document.querySelector('#color-tag')

  const chosenMode = document.querySelector('.nav-links .link.link-active').textContent.toLowerCase()

  const randomColor = modes[chosenMode]()

  colorTag.textContent = randomColor
  root.style.setProperty('--background-chosen-color', randomColor)
})
