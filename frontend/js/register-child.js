const option=document.getElementById("dobOption");

option.addEventListener("change",()=>{

if(option.value==="yes"){

document.getElementById("dobSection").style.display="block";

document.getElementById("ageSection").style.display="none";

}else{

document.getElementById("dobSection").style.display="none";

document.getElementById("ageSection").style.display="block";

}

});

document.getElementById("childForm").addEventListener("submit",(e)=>{

e.preventDefault();

const currentHousehold=JSON.parse(localStorage.getItem("currentHousehold"));

const child={

id:crypto.randomUUID(),

householdId:currentHousehold.id,

firstName:document.getElementById("firstName").value,

lastName:document.getElementById("lastName").value,

sex:document.getElementById("sex").value,

dob:document.getElementById("dob").value,

estimatedAgeMonths:document.getElementById("ageMonths").value,

createdAt:new Date().toISOString()

};

let children=JSON.parse(localStorage.getItem("children"))||[];

children.push(child);

localStorage.setItem("children",JSON.stringify(children));

localStorage.setItem("currentChild",JSON.stringify(child));

alert("Child registered successfully!");

window.location.href="screening.html";

});
