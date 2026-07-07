document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            const correctEmail = "test@10.gmail.com";
            const correctPassword = "test@2026";

            if (email === correctEmail && password === correctPassword) {

                alert("Login Successful!");

                window.location.href = "home.html";

            } else {

                alert("Invalid Email or Password!");

            }

        });

    }

});