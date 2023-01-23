const $form = document.querySelector('#form')
const btnMailto = document.querySelector('#enviar-mail')
$form.addEventListener('submit', doSubmit)

function doSubmit(event){
 event.preventDefault()
 const form = new FormData(this)
 console.log(form.get('nombre'))
 btnMailto.setAttribute('href',`mailto:socarodrigo2@gmail.com?subject=${form.get('nombre')}${form.get('email')}&body=${form.get('mensaje')}`)
 btnMailto.click()
}