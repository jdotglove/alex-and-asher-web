class DesktopFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
    
          .desktop-footer {
            display: flex;
            justify-content: center;
            font: 16.3px "Nunito Sans", sans-serif;
            margin-top: 10rem;
            padding-bottom: 8rem;
          }
     
      </style>
      <footer class="desktop-footer">
        <p>© 2024&nbsp;Alex &amp; Asher</p>
      </footer>
    `;
  }
}

customElements.define("desktop-footer-component", DesktopFooter);