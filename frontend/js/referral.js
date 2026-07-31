const child = Storage.get("currentChild");
const screening = Storage.get("currentScreening");

if (!child || !screening) {

    alert("No active child or screening found.");

    window.location.href = "dashboard.html";

}

document.getElementById("childName").textContent =
child.firstName + " " + child.lastName;

document.getElementById("nutritionStatus").textContent =
screening.status;

document.getElementById("referralForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const referral = {

        id: crypto.randomUUID(),

        childId: child.id,

        screeningId: screening.id,

        facility: document.getElementById("facility").value,

        status: "Pending",

        notes: document.getElementById("notes").value,

        createdAt: new Date().toISOString(),

        updatedAt: new Date().toISOString(),

        syncStatus: "PENDING"

    };

    let referrals = Storage.get("referrals") || [];

    referrals.push(referral);

    Storage.save("referrals", referrals);

    Storage.save("currentReferral", referral);

    alert("Referral created successfully.");

    window.location.href = "followup.html";

});
