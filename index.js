// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// --- Dark Mode Feature ---
const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn')

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    return savedTheme
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
  
  themeToggleBtns.forEach((btn) => {
    const iconSpan = btn.querySelector('.theme-toggle-icon')
    const textSpan = btn.querySelector('.theme-toggle-text')
    if (theme === 'dark') {
      if (iconSpan) iconSpan.innerHTML = '☀️'
      if (textSpan) textSpan.textContent = 'Light'
    } else {
      if (iconSpan) iconSpan.innerHTML = '🌙'
      if (textSpan) textSpan.textContent = 'Dark'
    }
  })
}

// Initialize Theme
const currentTheme = getPreferredTheme()
setTheme(currentTheme)

themeToggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  })
})

