document.getElementById("householdForm").addEventListener("submit", function(event){

    event.preventDefault();

    const household = {

        id: crypto.randomUUID(),

        headName: document.getElementById("headName").value,

        caregiver: document.getElementById("caregiver").value,

        phone: document.getElementById("phone").value,

        village: document.getElementById("village").value,

        landmark: document.getElementById("landmark").value,

        createdAt: new Date().toISOString()

    };

    let households = JSON.parse(localStorage.getItem("households")) || [];

    households.push(household);

    localStorage.setItem("households", JSON.stringify(households));

    localStorage.setItem("currentHousehold", JSON.stringify(household));

    alert("Household registered successfully!");

    window.location.href = "register-child.html";

});
