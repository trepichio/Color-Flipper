const links = document.querySelector('.nav-links')

links.addEventListener('click', (e) => {
  if (e.target === links) return

  Array.from(links.children).forEach(link => {
    link.classList.remove('link-active')
    if (link === e.target) e.target.classList.add('link-active');
  })
})
