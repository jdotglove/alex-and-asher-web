const navDialog = document.getElementById("nav-dialog");

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("navDialog").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("navDialog").style.height = "0%";
}
