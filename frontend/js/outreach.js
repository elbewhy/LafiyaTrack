// Automatically set today's date
const dateField = document.getElementById("date");

dateField.value = new Date().toISOString().split("T")[0];

// Handle form submission
document.getElementById("outreachForm").addEventListener("submit", function (event) {

event.preventDefault();

const session = {

programme: document.getElementById("programme").value,

activity: document.getElementById("activity").value,

village: document.getElementById("village").value,

date: document.getElementById("date").value,

status: "ACTIVE"

};

// Temporary local storage
localStorage.setItem("activeOutreach", JSON.stringify(session));

alert("Outreach session started successfully!");

window.location.href = "dashboard.html";

});
