var facts = [
    "Ampere is the unit of measuring currents",
    "Alessandro Volta invented the first electric circuit and the first battery",
    "Open switches allow electricity to flow through",
    "Electricity was discovered by the ancient Greeks",
    "Electric eels can produce shocks of around 500 volts", 
    "Muscle cells in the heart are contracted by electricity",
    "Benjamin Franklin invented the lightning rod to protect buildings",
    "Thomas Edison owned the first power plant, Pearl Street Station in Manhattan, which was built in 1982.",
    "Christmas tree lights stay lit when a bulb breaks because they are on parallel circuits",
    "The world's biggest lightbulb is in Edison, NJ",
    "Iceland uses the most electricity each year",
    "Electricity travels at 6,696,000 mph",
    "William Morrison built the first electric car",
    "Electricity in Albertville, France is produced by cheese",
    "Most of Quebec's electricity is produce from water - 96% is from hydroelectricity",
    "Electric eels produce around 500 volts of electricity and use it for hunting and self defense",
    "Michael Faraday is known as the Father of Electricity",

];

function newFact() {
    var randomFact = Math.floor(Math.random()*(facts.length));
    document.getElementById('factDisplay').innerHTML = facts[randomFact];
}
