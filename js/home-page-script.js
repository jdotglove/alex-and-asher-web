const navDialog = document.getElementById("nav-dialog");

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("navDialog").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("navDialog").style.height = "0%";
}

customElements.define("mobile-header",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const mobileHeader = document.getElementById("mobile-header-template").content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(mobileHeader.cloneNode(true));
    }
  });