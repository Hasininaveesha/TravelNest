// Hero quotes auto rotate
const quotes = [
  "Travel far, live free.",
  "Adventure is waiting.",
  "Explore the world.",
  "Make memories everywhere.",
  "Collect Memories, NOT things."
];

let i = 0;

function changeQuote() {
  document.getElementById("quote").textContent = quotes[i];
  i = (i + 1) % quotes.length;
}

setInterval(changeQuote, 3000);
changeQuote();

function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}


// Destination
const destinations = [
  "Paris, France",
  "Tokyo, Japan",
  "Bali, Indonesia",
  "Dubai, Arab Emirates",
  "Maldives, Male"
];

const day = new Date().getDate();
document.getElementById("destination").textContent =
  destinations[day % destinations.length];

// Newsletter
function saveEmail() {
  const email = document.getElementById("email").value;

  if (email) {
    localStorage.setItem("email", email);
    alert("Subscribed!");
  }
}