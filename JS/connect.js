const form = document.querySelector("#multi-page-form")
const submitButton = document.querySelector("#enviar")
const scriptURL = 'https://script.google.com/macros/s/AKfycbzMwE-MoKa9CFPpYs8Q8cIMaN2XewCC_U54fyIdMa748TNFBem9OuVvBlYIRm12DTkiag/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})