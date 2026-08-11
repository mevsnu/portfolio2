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

// --- Contact Form Submission Handler ---
const contactForm = document.querySelector('.contact__form')

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const submitBtn = contactForm.querySelector('.contact__btn')
    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')

    const name = nameInput ? nameInput.value.trim() : 'Guest'
    const email = emailInput ? emailInput.value.trim() : ''

    // Show loading state
    const originalBtnText = submitBtn.textContent
    submitBtn.textContent = 'Sending...'
    submitBtn.disabled = true

    setTimeout(() => {
      // Remove any existing notification
      const existingAlert = contactForm.querySelector('.contact__alert')
      if (existingAlert) existingAlert.remove()

      // Create success notification alert
      const alertDiv = document.createElement('div')
      alertDiv.className = 'contact__alert'
      alertDiv.innerHTML = `
        <div style="background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; color: #22c55e; padding: 1.5rem 2rem; border-radius: 8px; margin-bottom: 2.5rem; text-align: center; font-size: 1.6rem; font-weight: 600; line-height: 1.5;">
          🎉 Thank you, <strong>${name}</strong>! Your message has been sent successfully. Vishnu will contact you soon${email ? ' at <strong>' + email + '</strong>' : ''}.
        </div>
      `

      contactForm.prepend(alertDiv)
      contactForm.reset()

      submitBtn.textContent = originalBtnText
      submitBtn.disabled = false

      // Auto dismiss after 8 seconds
      setTimeout(() => {
        if (alertDiv) alertDiv.remove()
      }, 8000)
    }, 500)
  })
}


