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


            try {

                // Save message to SQLite database
                const dbResponse = await fetch("/contact", {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(data)
                });


                const dbResult = await dbResponse.json();


                if(dbResult.success){


                    // Send email through Web3Forms
                    const emailData = new FormData();

                    emailData.append(
                        "access_key",
                        "b3b86f65-1789-47c8-9165-8c920e3c997c"
                    );

                    emailData.append("from_name", data.name);
                    emailData.append("email", data.email);
                    emailData.append("subject", data.subject);
                    emailData.append("message", data.message);
                    emailData.append("replyto", data.email);


                    const emailResponse = await fetch(
                        "https://api.web3forms.com/submit",
                        {
                            method:"POST",
                            body:emailData
                        }
                    );


                    const emailResult = await emailResponse.json();

                    console.log("Web3Forms Status:", emailResponse.status);
                    console.log("Web3Forms Response:", emailResult);

            if (emailResult.success) {
                alert("Message sent successfully!");
                contactForm.reset();
                } else {
                   alert("Saved to database but email failed.\n\n" + emailResult.message);
                }


                }


            } catch(error){

                console.log(error);
                alert("Something went wrong.");

            }

        });

    }

});