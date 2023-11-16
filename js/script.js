const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})      
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); 
        forms.classList.toggle("show-signup");
    })
})


$(document).ready(function(){
    const existingUsers = [
        { usernameC: "rodriClient", password: "password1" },
        { usernameA: "rodriAdmin", password: "admin1" },
        { usernameP: "rodriPro", password: "profesional1" }
    ];
    
    
    var boton = $('#btn');
    
    boton.click(function(event){
    
        event.preventDefault();
    
        const usernameInput = $("#username");
        const passwordInput = $("#password");
        const usernameC = usernameInput.val();
        const usernameA = usernameInput.val();
        const usernameP = usernameInput.val();
        const password = passwordInput.val();
    
        const userC = existingUsers.find(userC => userC.usernameC === usernameC && userC.password === password);
        if (userC) {
            console.log("Logged in as", userC.username);
            window.location.href = "client.html";
        } else {
            const error = $("#error");
            error.text("Invalid username or password");
        }


    const userA = existingUsers.find(userA => userA.usernameA === usernameA && userA.password === password);
        if (userA) {
            console.log("Logged in as", userA.username);
            window.location.href = "admin.html";
        } else {
            const error = $("#error");
            error.text("Invalid username or password");
        }

    const userP = existingUsers.find(userP => userP.usernameP === usernameP && userP.password === password);
        if (userP) {
            console.log("Logged in as", userP.username);
            window.location.href = "profesional.html";
        } else {    
            const error = $("#error");
            error.text("Invalid username or password");
        };
    });

    const registerForm = $("#register-form");
    
    registerForm.submit(function(event) {
        event.preventDefault(); 
    
        // obtener los valores de los inputs
        const usernameInput = $("#register-username");
        const passwordInput = $("#register-password");
        const confirmPasswordInput = $("#confirm-password");
        const username = usernameInput.val();
        const password = passwordInput.val();
        const confirmPassword = confirmPasswordInput.val();
    
        // chequear si el usuario ya existe
        if (password !== confirmPassword) {
            const error = $("#register-error");
            error.text("Passwords do not match");
            return;
        }
    
        //agregar el usuario a la lista de usuarios
        existingUsers.push({ username, password });
    
        // redirigir a la pagina de login
        window.location.href = "Progess.html";
    });
        
        });



//Home Cliente

