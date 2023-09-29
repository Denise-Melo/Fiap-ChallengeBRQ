function validateForm() {
    var emailInput = document.getElementById("form2Example11");
    var passwordInput = document.getElementById("form2Example22");
    
    //email está vazio?
    if (emailInput.value.trim() === "") {
        emailInput.classList.add("is-invalid");
    } else {
        emailInput.classList.remove("is-invalid");
    }
    
    //está vazio ?
    if (passwordInput.value.trim() === "") {
        passwordInput.classList.add("is-invalid");
    } else {
        passwordInput.classList.remove("is-invalid");
    }
    
    if (!emailInput.classList.contains("is-invalid") && !passwordInput.classList.contains("is-invalid")) {
        document.getElementById("loginForm").submit();
    }
}
