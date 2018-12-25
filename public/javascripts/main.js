
document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const btn = document.querySelector('#btn')
  const result = document.querySelector('#result')

  btn.addEventListener('click', () => {
    // const url = 'http://localhost:3000/api/random'
    const url = 'https://morning-lowlands-79086.herokuapp.com/api/random'
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

})