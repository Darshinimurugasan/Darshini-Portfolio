/* =========================
   CONTACT FORM SAVE
========================= */

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbx6mAWn9y3SHC2qFetma5ioK-IcIMFl5tPczRSrkY3hpBuArfWDQCD0tO-tnu1TsOeLUQ/exec";

const contactForm =
document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();

            const data = {

                name:
                document.getElementById("name").value,

                email:
                document.getElementById("email").value,

                message:
                document.getElementById("message").value,

                timestamp:
                new Date().toLocaleString()

            };

            try {

                await fetch(
                    GOOGLE_SCRIPT_URL,
                    {
                        method: "POST",
                        body: JSON.stringify(data)
                    }
                );

                alert(
                    "Message Sent Successfully!"
                );

                contactForm.reset();

            } catch (error) {

                alert(
                    "Error Sending Message"
                );

                console.log(error);

            }

        }
    );

}
