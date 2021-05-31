const sky = document.getElementById('sky')
const sun = document.getElementById('sun')
const pig = document.getElementById('pig')
const field = document.getElementById('field')
const question = document.querySelector('.question')

function move () {
  const value = window.scrollY

  sky.style.top = value * 0.5 + 'px'
  sun.style.right = value * 0.3 + 'px'
  sun.style.top = value * 0.5 + 'px'
  field.style.top = -value * 0.2 + 'px'
  question.style.top = value + 'px'
  pig.style.left = 300 + value * 0.7 + 'px'
  pig.style.top = 910 + value * 0.05 + 'px'
}

window.addEventListener('scroll', move)
