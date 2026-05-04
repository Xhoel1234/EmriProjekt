function formContact(event){
     event.preventDefault()
     let firstName = document.getElementById("firstname").value
     let email = document.getElementById("email").value
     let comment = document.getElementById("comment").value
     let alert = document.getElementById("alert")
     alert.style.display = "block"
     alert.textContent = "Thank you "+firstName+""+comment+"." 
}