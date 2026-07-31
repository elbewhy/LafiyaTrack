document.getElementById("householdForm").addEventListener("submit", function (e) {

    e.preventDefault();

    // Get the active outreach session
    const outreach = Storage.get("currentOutreach");

    if (!outreach) {
        alert("Please start an outreach session first.");
        window.location.href = "outreach.html";
        return;
    }

    // Create household object
    const household = {

        id: crypto.randomUUID(),

        outreachId: outreach.id,

        headName: document.getElementById("headName").value,

        caregiver: document.getElementById("caregiver").value,

        phone: document.getElementById("phone").value,

        landmark: document.getElementById("landmark").value,

        createdAt: new Date().toISOString(),

        updatedAt: new Date().toISOString(),

        syncStatus: "PENDING"

    };

    // Save to households collection
    let households = Storage.get("households") || [];

    households.push(household);

    Storage.save("households", households);

    // Add household to the active outreach session
    if (!outreach.households) {
        outreach.households = [];
    }

    outreach.households.push(household);

    Storage.save("currentOutreach", outreach);

    // Update outreachSessions list
    let outreachSessions = Storage.get("outreachSessions") || [];

    outreachSessions = outreachSessions.map(session => {

        if (session.id === outreach.id) {
            return outreach;
        }

        return session;

    });

    Storage.save("outreachSessions", outreachSessions);

    // Save current household
    Storage.save("currentHousehold", household);

    alert("Household Registered Successfully.");

    window.location.href = "register-child.html";

});
