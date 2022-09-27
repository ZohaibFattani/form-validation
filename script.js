let name = document.getElementById('name')
let password = document.getElementById('password')
let form = document.getElementById('form')
let errorElement = document.getElementById('error')


// prevents page from submitting when errors
form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value === null) {
        messages.push('Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }
    
    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    }

    if (password.value === 'password') {
        messages.push('Password can not be password')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})