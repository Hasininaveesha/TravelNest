// Form validation
document.getElementById("feedbackForm")
.addEventListener("submit", function(event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  const message =
    document.getElementById("message").value;

  // Validation
  if (name === "" || email === "" || message === "") {

    alert("Please fill all fields");

    return;
  }

  // save to local storage
  const feedback = {
    name: name,
    email: email,
    message: message
  };

  localStorage.setItem(
    "feedbackData",
    JSON.stringify(feedback)
  );

  document.getElementById("successMessage")
  .textContent = "Feedback submitted successfully!";

  document.getElementById("feedbackForm").reset();

});

// Faq
const accordions =
  document.querySelectorAll(".accordion");

accordions.forEach(button => {

  button.addEventListener("click", function() {

    const panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    }

    else {
      panel.style.display = "block";
    }

  });

});