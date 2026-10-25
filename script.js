// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Automatically update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Digital marketing quiz
const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");

const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "a",
    q5: "b"
};

quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(quizForm);
    let score = 0;

    for (const question in correctAnswers) {
        if (formData.get(question) === correctAnswers[question]) {
            score++;
        }
    }

    const percentage = Math.round((score / 5) * 100);

    let message;

    if (score === 5) {
        message = "Excellent! You answered every question correctly.";
    } else if (score >= 3) {
        message = "Good work! Review the topics and try again.";
    } else {
        message = "Keep learning! Review the learning modules and retry.";
    }

    quizResult.textContent =
        `Your score: ${score}/5 (${percentage}%). ${message}`;

    quizResult.style.display = "block";
    quizResult.style.background = score >= 3 ? "#dcfce7" : "#fef3c7";
    quizResult.style.color = "#172033";

    quizResult.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});

// Contact form: prepare an email in the user's email application.
// Replace the example address with your actual contact email.
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const recipient = "your-email@example.com";

    if (recipient === "your-email@example.com") {
        alert(
            "The contact form is ready! To use it, open script.js " +
            "and replace your-email@example.com with your actual email address."
        );
        return;
    }

    const subject = encodeURIComponent("Digital Commerce Hub enquiry");
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;
});
