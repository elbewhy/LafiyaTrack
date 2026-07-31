document
.getElementById("householdForm")
.addEventListener("submit",function(e){

e.preventDefault();

const outreach=
Storage.get("currentOutreach");

if(!outreach){

alert("Please start an outreach session first.");

window.location.href="outreach.html";

return;

}

const household={

id:crypto.randomUUID(),

outreachId:outreach.id,

headName:document.getElementById("headName").value,

caregiver:document.getElementById("caregiver").value,

phone:document.getElementById("phone").value,

landmark:document.getElementById("landmark").value,

createdAt:new Date().toISOString(),

updatedAt:new Date().toISOString(),

syncStatus:"PENDING"

};

let households=
Storage.get("households") || [];

households.push(household);

Storage.save("households",households);

Storage.save("currentHousehold",household);

alert("Household Registered Successfully.");

window.location.href="register-child.html";

});
