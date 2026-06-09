//Destination Dat
const destinations = [

  {
    name: "Bali",
    type: "Relaxation",
    budget: "Medium",
    image: "../assets/Random/Bali.jpeg",
    info: "Beautiful beaches and relaxing sunsets."
  },

  {
    name: "Swiss Alps",
    type: "Nature",
    budget: "High",
    image: "../assets/Random/Swiss.jpeg",
    info: "Snowy mountains and amazing scenery."
  },

  {
    name: "Tokyo",
    type: "Cultural",
    budget: "High",
    image: "../assets/Random/Tokyo.jpeg",
    info: "Modern city mixed with Japanese culture."
  },

  {
    name: "Amazon Forest",
    type: "Adventure",
    budget: "Low",
    image: "../assets/Random/Amazon.jpeg",
    info: "Wild jungle adventure experience."
  }

];

let selectedTrip = null;

//Generate trip
function generateTrip() {

  const type =
    document.getElementById("travelType").value;

  const budget =
    document.getElementById("budgetRange").value;

  const filtered =
    destinations.filter(destination =>

      destination.type === type &&
      destination.budget === budget
    );

  if (filtered.length === 0) {

    document.getElementById("destinationName").textContent =
      "No destination found";

    return;
  }

  const randomIndex =
    Math.floor(Math.random() * filtered.length);

  selectedTrip = filtered[randomIndex];

  document.getElementById("destinationName").textContent =
    selectedTrip.name;

  document.getElementById("destinationImage").src =
    selectedTrip.image;

  document.getElementById("destinationInfo").textContent =
    selectedTrip.info;
}

//save to wishlist
function saveWishlist() {

  if (selectedTrip == null) {
    alert("Generate a trip first!");
    return;
  }

  localStorage.setItem(
    "wishlist",
    JSON.stringify(selectedTrip)
  );

  alert("Added to wishlist!");
}