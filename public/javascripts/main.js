
document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const btn = document.querySelector('#btn')
  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '末吉', '凶']
    let random = Math.floor(Math.random() * (1+2))
    btn.textContent = results[random]
  })
  btn.addEventListener('mousedown', () => {
    btn.classList.add('pushed')
  })
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pushed')
  })
  console.log('-- main --')
})