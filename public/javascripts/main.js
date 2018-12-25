
document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const btn = document.querySelector('#btn')
  btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * (1+2))
    switch(random) {
      case 0:
      btn.textContent = "大吉"
      break
      case 1:
      btn.textContent = "中吉"
      break
      case 2:
      btn.textContent = "凶"
      break
    }
    // btn.textContent = random
  })
  btn.addEventListener('mousedown', () => {
    btn.classList.add('pushed')
  })
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pushed')
  })
  console.log('-- main --')
})