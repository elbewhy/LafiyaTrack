document.getElementById("screeningForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const currentChild = Storage.get("currentChild");

    if (!currentChild) {

        alert("No child selected.");

        window.location.href = "register-child.html";

        return;

    }

    const muac = Number(document.getElementById("muac").value);

    const edema = document.getElementById("edema").value === "yes";

    const weight = document.getElementById("weight").value || null;

    const height = document.getElementById("height").value || null;

    let result;

    try {

        result = NutritionEngine.classify(muac, edema);

    } catch (error) {

        alert(error.message);

        return;

    }

    const screening = {

        id: crypto.randomUUID(),

        childId: currentChild.id,

        muac: muac,

        edema: edema,

        weight: weight,

        height: height,

        status: result.status,

        advice: result.advice,

        createdAt: new Date().toISOString(),

        updatedAt: new Date().toISOString(),

        syncStatus: "PENDING"

    };

    let screenings = Storage.get("screenings") || [];

    screenings.push(screening);

    Storage.save("screenings", screenings);

    Storage.save("currentScreening", screening);

    const resultCard = document.getElementById("resultCard");

    resultCard.className = "alert alert-" + result.color;

    resultCard.style.display = "block";

    resultCard.innerHTML = `
        <h4>${result.status}</h4>
        <p>${result.advice}</p>
        <hr>
        <button id="nextButton" class="btn btn-primary">
            Continue
        </button>
    `;

    document.getElementById("nextButton").addEventListener("click", function () {

        if (result.status === "NORMAL") {

            window.location.href = "dashboard.html";

        } else {

            window.location.href = "referral.html";

        }

    });

});
