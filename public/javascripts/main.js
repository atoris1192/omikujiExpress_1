
document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const btn = document.querySelector('#btn')
  btn.addEventListener('click', () => {
    btn.textContent = 'hit!'
  })
  btn.addEventListener('mousedown', () => {
    btn.classList.add('pushed')
  })
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pushed')
  })
  console.log('-- main --')
})