document.getElementById("childForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const household = Storage.get("currentHousehold");

    if (!household) {

        alert("Please register a household first.");

        window.location.href = "household.html";

        return;

    }

    const child = {

        id: crypto.randomUUID(),

        householdId: household.id,

        firstName: document.getElementById("firstName").value,

        lastName: document.getElementById("lastName").value,

        sex: document.getElementById("sex").value,

        dob: document.getElementById("dob").value,

        estimatedAgeMonths: Number(document.getElementById("ageMonths").value) || null,

        createdAt: new Date().toISOString(),

        updatedAt: new Date().toISOString(),

        syncStatus: "PENDING"

    };

    let children = Storage.get("children") || [];

    children.push(child);

    Storage.save("children", children);

    Storage.save("currentChild", child);

    alert("Child Registered Successfully.");

    window.location.href = "screening.html";

});
