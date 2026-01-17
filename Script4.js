const form=document.getElementById('regForm')
  const nameField=document.getElementById('name')
  const emailField=document.getElementById('email')
  const passField=document.getElementById('password')
  const nameErr=document.getElementById('nameErr')
  const emailErr=document.getElementById('emailErr')
  const passErr=document.getElementById('passErr')

  form.addEventListener('submit',e=>{
    e.preventDefault()
    let valid=true

    if(nameField.value.trim()===""){nameErr.textContent="Name required";nameField.classList.add('invalid');valid=false}
    else{nameErr.textContent="";nameField.classList.remove('invalid');nameField.classList.add('valid')}

    if(emailField.value.trim()===""||!emailField.value.includes('@')){emailErr.textContent="Invalid email";emailField.classList.add('invalid');valid=false}
    else{emailErr.textContent="";emailField.classList.remove('invalid');emailField.classList.add('valid')}

    if(passField.value.length<8){passErr.textContent="Min 8 characters";passField.classList.add('invalid');valid=false}
    else{passErr.textContent="";passField.classList.remove('invalid');passField.classList.add('valid')}

    if(valid) alert("Form Submitted Successfully!")
  })