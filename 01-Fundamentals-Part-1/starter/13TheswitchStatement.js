const day = "thursday";

switch (day) {
  case "monday":
  case "tusday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record vídeos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday" || day === "tusday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday ") {
  console.log("Record vídeos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
