document
.getElementById("followupForm")
.addEventListener("submit",function(e){

e.preventDefault();

const referral=

JSON.parse(localStorage.getItem("latestReferral"));

const followup={

id:crypto.randomUUID(),

referralId:referral?.id || null,

date:document.getElementById("date").value,

completed:false,

createdAt:new Date().toISOString(),

updatedAt:new Date().toISOString(),

syncStatus:"PENDING"

};

let followups=

JSON.parse(localStorage.getItem("followups"))||[];

followups.push(followup);

localStorage.setItem(

"followups",

JSON.stringify(followups)

);

alert("Follow-up Scheduled Successfully!");

window.location.href="dashboard.html";

});
