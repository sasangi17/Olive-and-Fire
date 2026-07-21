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

                alert(result.message);

                if (result.success) {

                    bookingForm.reset();

                    timeButtons.forEach(btn => btn.classList.remove("active"));

                    timeInput.value = "";

                }

            } catch (err) {

                console.error(err);

                alert("Booking failed.");

            }

        });

    }

});