 document.addEventListener("DOMContentLoaded", function() {
            const loginForm = document.querySelector(".login-form");
            loginForm.addEventListener("submit", function(event) {
                event.preventDefault();
                const email = this.elements.email.value;
                const password = this.elements.password.value;
                if (!email || !password) {
                    alert("Усі поля повинні бути заповнені.");
                    return;
                }
                const userData = {
                    email: email,
                    password: password
                };
                console.log(userData);
                this.reset();
            });
        });