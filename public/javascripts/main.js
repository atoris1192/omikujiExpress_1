
document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const url = 'http://localhost:3000/api/random'

  const btn = document.querySelector('#btn')
  btn.addEventListener('click', () => {
      fetch(url)
        .then(res => {
          return res.json()
        })
        .then(result => {
          btn.textContent = result.item
          console.log(result.item)
        })
        .catch(err => {
          console.error(err)
        })

  })
  btn.addEventListener('mousedown', () => {
    btn.classList.add('pushed')
  })
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pushed')
  })
  console.log('-- main --')
})