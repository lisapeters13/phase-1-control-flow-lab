
function scuberGreetingForFeet(rideDistance) {
  if (rideDistance <= 400) {
    return "This one is on me!";
  } else if (rideDistance >= 400 && rideDistance <= 2000) {
    return "That will be twenty bucks.";
  } else if (rideDistance >= 2000 && rideDistance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (rideDistance > 2500) {
    return "No can do.";
  }
}
  function ternaryCheckCity(city) {
    return city === "NYC" ? "Ok, sounds good." : "No go.";
  }
  // Write your code here!


function switchOnCharmFromTip(tip) {
  return tip === "generous" ? "Thank you so much." : tip === "not as generous" ? "Thank you." : "Bye.";
}