document.addEventListener("DOMContentLoaded", () => {

    // Sign up- create and save user account//
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", async (e) => {

            e.preventDefault();

            const fullname = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();

            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            try {

                const response = await fetch("/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fullname,
                        email,
                        password
                    })
                });

                const data = await response.json();

                if (data.success) {

                    localStorage.setItem("isLoggedIn", "true");

                    alert("Account Created Successfully!");

                    window.location.href = "login.html";

                } else {

                    alert(data.message);

                }

            } catch (error) {

                console.error(error);
                alert("Server Error");

            }

        });

    }

    //Login- login with saved username/email and password //
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", async (e) => {

            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            try {

                const response = await fetch("/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });

                const data = await response.json();

                if (data.success) {

                    alert("Login Successful!");

                    window.location.href = "index.html";

                } else {

                    alert(data.message);

                }

            } catch (error) {

                console.error(error);
                alert("Server Error");

            }

        });

    }
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("isLoggedIn");

        alert("Logged out successfully.");

        window.location.href = "login.html";

    });

}
});