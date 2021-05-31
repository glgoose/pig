const sky = document.getElementById('sky')
const sun = document.getElementById('sun')
const pig = document.getElementById('pig')
const field = document.getElementById('field')
const question = document.querySelector('.question')

const transform = (el, scrollY, factorX = 0, factorY = 0) =>
  (el.style.transform = `translateX(${scrollY *
    factorX}px) translateY(${scrollY * factorY}px)`)

function move () {
  const { scrollY, innerHeight: windowHeight } = window

  transform(sun, scrollY, -0.2, 0.5)
  transform(pig, scrollY, 0.7, 0.2)
  transform(question, scrollY, 0, 0.9)
}

window.addEventListener('scroll', move)
