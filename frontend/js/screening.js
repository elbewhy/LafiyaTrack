document.getElementById("screeningForm").addEventListener("submit", function(e){

    e.preventDefault();

    try{

        const muac = document.getElementById("muac").value;

        const edema = document.getElementById("edema").value === "yes";

        const result = NutritionEngine.classify(muac, edema);

        const card = document.getElementById("resultCard");

        card.className = "alert alert-" + result.color;

        card.style.display = "block";

        card.innerHTML = `
            <h4>${result.status}</h4>
            <p>${result.advice}</p>
            <button id="continueBtn" class="btn btn-primary mt-2">
                Continue
            </button>
        `;

        const currentChild = JSON.parse(localStorage.getItem("currentChild"));

        const screening = {

            id: crypto.randomUUID(),

            childId: currentChild.id,

            muac,

            edema,

            weight: document.getElementById("weight").value,

            height: document.getElementById("height").value,

            status: result.status,

            advice: result.advice,

            createdAt: new Date().toISOString()

        };

        let screenings = JSON.parse(localStorage.getItem("screenings")) || [];

        screenings.push(screening);

        localStorage.setItem("screenings", JSON.stringify(screenings));

        document.getElementById("continueBtn").addEventListener("click", function(){

            if(result.status === "NORMAL"){

                window.location.href = "dashboard.html";

            }else{

                window.location.href = "referral.html";

            }

        });

    }

    catch(error){

        alert(error.message);

    }

});
