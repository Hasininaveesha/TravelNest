let currentTotal = 0;

function calculateBudget() {

  const destination =
    document.getElementById("destination").value;

  const days =
    Number(document.getElementById("days").value);

  const budget =
    Number(document.getElementById("budget").value);

  currentTotal = days * budget;

  document.getElementById("totalCost").textContent =
    "Estimated Cost: $" + currentTotal;

  let status = "";
  let progressWidth = 0;

  if (budget < 50) {
    status = "Low Budget Trip";
    progressWidth = 30;
  }

  else if (budget >= 50 && budget <= 150) {
    status = "Moderate Budget Trip";
    progressWidth = 70;
  }

  else {
    status = "Luxury Trip";
    progressWidth = 100;
  }

  document.getElementById("budgetStatus").textContent =
    status;

  document.getElementById("progress").style.width =
    progressWidth + "%";
}

//Save to local storage
function saveTrip() {

  const destination =
    document.getElementById("destination").value;

  const tripData = {
    destination: destination,
    totalCost: currentTotal
  };

  localStorage.setItem(
    "savedTrip",
    JSON.stringify(tripData)
  );

  alert("Trip Saved!");
}