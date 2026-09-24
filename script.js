// ==========================
// Theme Toggle
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }

});

// ==========================
// Contact Form Save
// ==========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    const response = {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toLocaleString()
    };

    let responses =
        JSON.parse(localStorage.getItem("responses")) || [];

    responses.push(response);

    localStorage.setItem(
        "responses",
        JSON.stringify(responses)
    );

    alert("Response Saved Successfully!");

    contactForm.reset();

});

// ==========================
// Admin Login
// ==========================

const adminForm = document.getElementById("adminForm");

adminForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if (username === "admin" &&
        password === "1234") {

        document.getElementById("admin")
            .style.display = "none";

        document.getElementById("responsesSection")
            .style.display = "block";

        loadResponses();

    } else {

        alert("Invalid Username or Password");

    }

});

// ==========================
// Load Responses
// ==========================

function loadResponses() {

    let responses =
        JSON.parse(localStorage.getItem("responses")) || [];

    const container =
        document.getElementById("responsesContainer");

    container.innerHTML = "";

    responses.forEach((item) => {

        container.innerHTML += `

        <div class="response-card">

            <h3>${item.name}</h3>

            <p>
                <strong>Email:</strong>
                ${item.email}
            </p>

            <p>
                ${item.message}
            </p>

            <small>
                ${item.timestamp}
            </small>

        </div>

        `;

    });

}

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ==========================
// Page Load Message
// ==========================

window.onload = function () {

    console.log("Portfolio Website Loaded Successfully");

};