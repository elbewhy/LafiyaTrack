function loadDashboard() {

    const children = Storage.get("children") || [];

    const screenings = Storage.get("screenings") || [];

    const referrals = Storage.get("referrals") || [];

    const followups = Storage.get("followups") || [];

    document.getElementById("childrenCount").textContent =
        children.length;

    document.getElementById("screeningCount").textContent =
        screenings.length;

    document.getElementById("referralCount").textContent =
        referrals.length;

    document.getElementById("followupCount").textContent =
        followups.length;

}

loadDashboard();
