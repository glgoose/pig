const sun = document.getElementById('sun')
const pig = document.getElementById('pig')
const question = document.querySelector('.question')

const move = (el, factorX = 0, factorY = 0) => {
  const { scrollY } = window

  el.style.transform = `translateX(${scrollY *
    factorX}px) translateY(${scrollY * factorY}px)`
}

function moveAll () {
  move(sun, -0.2, 0.5)
  move(pig, 0.7, 0.2)
  move(question, 0, 0.9)
}

window.addEventListener('scroll', moveAll)
