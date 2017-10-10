var facts = [
    "Ampere is the unit of measuring currents",
    "Alessandro Volta invented the first electric circuit",
    "Open switches allow electricity to flow through",
    "Electricity was discovered by the ancient Greeks",
    "Electric eels can produce shocks of around 500 volts", 
    "Muscle cells in the heart are contracted by electricity",
    "Benjamin Franklin invented the lightning rod to protect buildings",

];

function newFact() {
    var randomFact = Math.floor(Math.random()*(facts.length));
    document.getElementById('factDisplay').innerHTML = facts[randomFact];
}
