document.addEventListener("DOMContentLoaded", () => {

    const bookingForm = document.getElementById("bookingForm");
    const timeInput = document.getElementById("time");
    const timeButtons = document.querySelectorAll(".time-grid button");

    // Select time
    timeButtons.forEach(button => {

        button.addEventListener("click", () => {

            timeButtons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            timeInput.value = button.textContent;

        });

    });

    if (bookingForm) {

        bookingForm.addEventListener("submit", async (e) => {

            e.preventDefault();

            const data = {

                fullname: document.getElementById("fullname").value.trim(),

                email: document.getElementById("email").value.trim(),

                date: document.getElementById("date").value,

                guests: document.getElementById("guests").value,

                time: document.getElementById("time").value,

                occasion: document.getElementById("occasion").value.trim(),

                note: document.getElementById("note").value.trim()

            };

            if (!data.time) {
                alert("Please select a time slot.");
                return;
            }

            try {

                const response = await fetch("/booking", {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(data)

                });

                const result = await response.json();

if (result.success) {

    // Send booking email using Web3Forms
    const emailData = new FormData();

    emailData.append(
        "access_key",
        "b3b86f65-1789-47c8-9165-8c920e3c997c"
    );

    emailData.append("from_name", data.fullname);
    emailData.append("email", data.email);
    emailData.append("subject", "New Table Reservation");
    emailData.append(
        "message",
`A new reservation has been made.

Full Name: ${data.fullname}

Email: ${data.email}

Date: ${data.date}

Guests: ${data.guests}

Time: ${data.time}

Occasion: ${data.occasion}

Special Request:
${data.note}`
    );

    emailData.append("replyto", data.email);

    const emailResponse = await fetch(
        "https://api.web3forms.com/submit",
        {
            method: "POST",
            body: emailData
        }
    );

    const emailResult = await emailResponse.json();

console.log("Booking Web3Forms Response:", emailResult);

if(emailResult.success){

    alert("Reservation confirmed successfully!");

}
else{

    alert("Reservation saved, but email failed.");

}

}

            } catch (err) {

                console.error(err);

                alert("Booking failed.");

            }

        });

    }

});