document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");

    if(contactForm){

        contactForm.addEventListener("submit", async (e) => {

            e.preventDefault();

            const data = {
                name: document.getElementById("name").value.trim(),
                email: document.getElementById("email").value.trim(),
                subject: document.getElementById("subject").value.trim(),
                message: document.getElementById("message").value.trim()
            };

            const response = await fetch("/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            alert(result.message);

            if(result.success){
                contactForm.reset();
            }

        });

    }

});