// Load data from storage

const households = Storage.get("households") || [];

const children = Storage.get("children") || [];

const screenings = Storage.get("screenings") || [];

const referrals = Storage.get("referrals") || [];

const followups = Storage.get("followups") || [];


// Update totals

document.getElementById("householdsCount").textContent = households.length;

document.getElementById("childrenCount").textContent = children.length;

document.getElementById("screeningsCount").textContent = screenings.length;


// Nutrition statistics

const normal = screenings.filter(item => item.status === "NORMAL").length;

const mam = screenings.filter(item => item.status === "MAM").length;

const sam = screenings.filter(item => item.status === "SAM").length;

document.getElementById("normalCount").textContent = normal;

document.getElementById("mamCount").textContent = mam;

document.getElementById("samCount").textContent = sam;


// Referrals

const pendingReferrals = referrals.filter(

item => item.status === "Pending"

).length;

document.getElementById("referralCount").textContent = pendingReferrals;


// Follow-ups

const pendingFollowups = followups.filter(

item => item.completed === false

).length;

document.getElementById("followupCount").textContent = pendingFollowups;
