document
.getElementById("outreachForm")
.addEventListener("submit", function(e){

e.preventDefault();

const outreach={

id:crypto.randomUUID(),

programme:document
.getElementById("programme").value,

village:document
.getElementById("village").value,

date:document
.getElementById("date").value,

status:"ACTIVE",

households:[],

createdAt:new Date().toISOString(),

updatedAt:new Date().toISOString(),

syncStatus:"PENDING"

};
  
let outreachSessions =
Storage.get("outreachSessions") || [];

outreachSessions.push(outreach);

Storage.save(
"outreachSessions",
outreachSessions
);


alert("Outreach Started Successfully.");

window.location.href="household.html";

});
