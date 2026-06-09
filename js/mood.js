// Audio 
const beachSound = new Audio  ("../assets/Audio/Beach.mp3")

const forestSound = new Audio ("../assets/Audio/Forest.mp3")

const citySound = new Audio ("../assets/Audio/City.mp3")

// Stop files
function stopAll() {
  beachSound.pause();
  forestSound.pause();
  citySound.pause();

  beachSound.currentTime = 0;
  forestSound.currentTime = 0;
  citySound.currentTime = 0;
}

// play
function playBeach() {
  stopAll();
  beachSound.play();
}

function playForest() {
  stopAll();
  forestSound.play();
}

function playCity() {
  stopAll();
  citySound.play();
}

function stopSound() {
  stopAll();
}

// Visited 
let visited =
  JSON.parse(localStorage.getItem("visited")) || [];

let planned =
  JSON.parse(localStorage.getItem("planned")) || [];


function displayLists() {

  const visitedList =
    document.getElementById("visitedList");

  const plannedList =
    document.getElementById("plannedList");

  visitedList.innerHTML = "";
  plannedList.innerHTML = "";

  visited.forEach(place => {
    visitedList.innerHTML += `<li>${place}</li>`;
  });

  planned.forEach(place => {
    plannedList.innerHTML += `<li>${place}</li>`;
  });
}

displayLists();

// Mark Visited
function markVisited() {

  const destination =
    document.getElementById("destination").value;

  visited.push(destination);

  localStorage.setItem(
    "visited",
    JSON.stringify(visited)
  );

  displayLists();
}

// Mark planned
function markPlanned() {

  const destination =
    document.getElementById("destination").value;

  planned.push(destination);

  localStorage.setItem(
    "planned",
    JSON.stringify(planned)
  );

  displayLists();
}