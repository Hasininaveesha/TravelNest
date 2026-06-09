const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    image: "../assets/Explorer/Bali.jpeg",
    description: "Bali is famous for beaches, temples, and beautiful sunsets.",
    attractions: ["Uluwatu Temple", "Kuta Beach", "Tegallalang Rice Terrace"],
    costs: {
      hotel: "$80",
      food: "$20",
      transport: "$15"
    }
  },

  {
    name: "Paris",
    country: "France",
    continent: "Europe",
    image: "../assets/Explorer/France.jpeg",
    description: "Paris is known for art, fashion, and the Eiffel Tower.",
    attractions: ["Eiffel Tower", "Louvre Museum", "Seine River"],
    costs: {
      hotel: "$150",
      food: "$40",
      transport: "$25"
    }
  },

  {
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    image: "../assets/Explorer/SF.jpeg",
    description: "Cape Town has mountains, beaches, and amazing scenery.",
    attractions: ["Table Mountain", "Camps Bay", "Robben Island"],
    costs: {
      hotel: "$90",
      food: "$25",
      transport: "$20"
    }
  }
];

// cards
function displayDestinations(data) {
  const container = document.getElementById("cardContainer");

  container.innerHTML = "";

  data.forEach(destination => {
    container.innerHTML += `
      <div class="card" onclick="openModal('${destination.name}')">

        <img src="${destination.image}" alt="${destination.name}">

        <div class="card-content">
          <h3>${destination.name}</h3>
          <p>${destination.country}</p>
        </div>

      </div>
    `;
  });
}

displayDestinations(destinations);

// Search/filter
document.getElementById("searchInput").addEventListener("input", filterData);

document.getElementById("continentFilter").addEventListener("change", filterData);

function filterData() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();

  const continentValue = document.getElementById("continentFilter").value;

  const filtered = destinations.filter(destination => {

    const matchesSearch =
      destination.name.toLowerCase().includes(searchValue);

    const matchesContinent =
      continentValue === "all" ||
      destination.continent === continentValue;

    return matchesSearch && matchesContinent;
  });

  displayDestinations(filtered);
}

// Modal
function openModal(name) {

  const destination = destinations.find(d => d.name === name);

  document.getElementById("modal").style.display = "block";

  document.getElementById("modalTitle").textContent =
    destination.name;

  document.getElementById("modalDescription").textContent =
    destination.description;

  const attractionsList =
    document.getElementById("attractions");

  attractionsList.innerHTML = "";

  destination.attractions.forEach(item => {
    attractionsList.innerHTML += `<li>${item}</li>`;
  });

  document.getElementById("hotelCost").textContent =
    destination.costs.hotel;

  document.getElementById("foodCost").textContent =
    destination.costs.food;

  document.getElementById("transportCost").textContent =
    destination.costs.transport;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}