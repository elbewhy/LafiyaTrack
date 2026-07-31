const latestScreening =
JSON.parse(localStorage.getItem("latestScreening"));

document.getElementById("reason").value =
latestScreening.status;

document
.getElementById("referralForm")
.addEventListener("submit", function(e){

e.preventDefault();

const referral={

id:crypto.randomUUID(),

childId:latestScreening.childId,

facility:document.getElementById("facility").value,

reason:latestScreening.status,

notes:document.getElementById("notes").value,

status:"Pending",

createdAt:new Date().toISOString(),

updatedAt:new Date().toISOString(),

syncStatus:"PENDING"

};

let referrals=
JSON.parse(localStorage.getItem("referrals"))||[];

referrals.push(referral);

localStorage.setItem(

"referrals",

JSON.stringify(referrals)

);

window.location.href="followup.html";

});
