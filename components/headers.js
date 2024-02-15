class DesktopHeader extends HTMLElement {
  navigationLinks;
  constructor() {
    super();
    this.navigationLinks = `
      
      <a href="services.html" class="nav-link ${window.location.pathname.includes("/services") ? "active" : ""}">Services</a>
      <a href="shop.html" class="nav-link ${window.location.pathname.includes("/shop") ? "active" : ""}">Shop</a>
      <a
        href="https://www.google.com/maps/place/Alex+%26+Asher/@35.4587539,-78.5025389,8z/data=!3m1!4b1!4m6!3m5!1s0x4553d12bf734747f:0xaf76986437b14c5d!8m2!3d35.4587539!4d-78.5025389!16s%2Fg%2F11s7rg0y54?entry=ttu"
        class="nav-link ${window.location.pathname.includes("/reviews") ? "active" : ""}"
        target="_blank"
      >Leave A Review</a>
      <a href="about-us.html" class="nav-link ${window.location.pathname.includes("/about-us") ? "active" : ""}">About Us</a>
    `
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        @media (max-width: 961px) {
          .desktop-header {
            display: none;
          }
        }
        @media (min-width: 962px) {
          .desktop-header {
            display: grid;
            grid-template-columns: repeat(2, 50% 50%);
            background-position: -200px -300px;
            background-repeat: no-repeat;
            background-size: 1750px;
            background-image: url("./assets/triangle.svg");
            padding-bottom: 175px;
            z-index: 3;
            position: relative;
          }

          .logo-container {
            display: flex;
            flex-shrink: 1;
            justify-content: center;
          }
          .desktop-header .nav-link {
            color: #13263a;
            align-self: center;
            white-space: nowrap;
            text-decoration: none;
            margin: auto 0;
            font: 400 21px "Crimson Text", serif;
          }
          
        }
        .nav-link {
          color: #13263a;
          align-self: center;
          white-space: nowrap;
          text-decoration: none;
          margin: auto 0;
          font: 400 21px "Nunito Sans", serif;
        }
        .nav-link:hover, .nav-link.active {
          text-decoration: underline;
        }
        .desktop-nav-v2 {
          display: flex;
          background-color: #E29AC4;
          gap: 15px;
          padding-left: 50px;
          border-radius: 50px 0 0 50px;
          height: 100px;
          align-items: center;
          justify-content: space-evenly;
          overflow-x: hidden;
          flex-wrap: wrap;
        }
        .description {
          color: rgba(19, 38, 58, 0.6);
          margin: 0 0 0 0;
          flex-shrink: 1;
          display: flex;
          justify-items: center;
          margin-left: auto;
          margin-right: auto;
          margin-top: 50px;
          align-self: center;
          font: 400 28px "Nunito Sans", sans-serif;
          font-weight: 100;
          width: 50%;
          text-align: center;
        }
        .logo-wrapper {
          display: flex;
          z-index: 1;
          align-items: flex-start;
          align-content: flex-start;
          align-self: flex-start;
        }
        .responsive-logo {
          display: flex;
          max-width: 100%;
          max-height: 100%;
          align-self: flex-start;
        }
      </style>
      <header class="desktop-header">
        <a class="logo-wrapper" href="index.html">
          <img src="./assets/LogoNoBackground.svg" class="responsive-logo" alt="alex and asher logo" />
        </a>
        <section>
          <nav class="desktop-nav-v2">
            ${this.navigationLinks}
          </nav>
          <div class="description">
            Specialty shops deserve special attention
          </div>
        </section>
      </header>
    `;
  }
}

class MobileHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        @media (max-width: 961px) {
          .mobile-header {
            display: flex;
            width: 100%;
            height: 125px;
            position: sticky;
            top: 0;
            box-sizing: border-box;
            justify-content: space-evenly;
            z-index: 2;
          }
          .mobile-header .main-container {
            top: 0;
            position: fixed;
            justify-content: space-between;
            background-color: #fff;
            display: flex;
            width: 100%;
            box-sizing: border-box;
            flex-direction: row;
            padding: 12px 24px;
          }
          .nav-dialog-header .main-container {
            padding: 12px 24px;
            width: 100%;
            justify-content: space-between;
            display: flex;
            box-sizing: border-box;
            flex-direction: row;
          }
          .nav-dialog-header .nav-link {
            align-self: flex-start;
          }
          .nav-link {
            color: #13263a;
            white-space: nowrap;
            text-decoration: none;
            margin: auto 0;
            font: 400 21px "Crimson Text", serif;
          }
          .dialog-navigation {
            display: flex;
            flex-wrap: wrap;
          }
          .dialog-navigation {
            background-color: #fff;
            display: flex;
            width: 100%;
            gap: 10px;
            align-content: flex-start;
            flex-direction: column;
            padding: 50px 24px;
          }
        }

        @media (min-width: 962px) {
          .mobile-header {
            display: none;
          }
        }
        .more-wrapper {
          cursor: pointer;
          display: flex;
          object-position: center;
          flex-shrink: 0;
          fill: #000;
          overflow: hidden;
          align-items: center;
          align-self: center;
          max-width: 100%;
          height: fit-content;
          border: none;
          padding: 0;
          background-color: inherit;
        }
        .close-wrapper {
          cursor: pointer;
          display: flex;
          object-position: center;
          flex-shrink: 0;
          fill: #000;
          overflow: hidden;
          align-items: center;
          align-self: center;
          max-width: 100%;
          height: fit-content;
          border: none;
          padding: 0;
          background-color: inherit;
        }
        .nav-dialog {
          /* Height & width depends on how you want to reveal the overlay (see JS below) */
          height: 0;
          width: 100%;
          position: fixed;
          /* Stay in place */
          z-index: 3;
          /* Sit on top */
          left: 0;
          top: 0;
          background-color: rgb(255, 255, 255);
          overflow-x: hidden;
          /* Disable horizontal scroll */
          transition: .1s;
          /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
        }
      
        .nav-link:hover {
          text-decoration: underline;
        }
        .nav-dialog-header .main-container {
          padding: 10px 24px;
          width: 100%;
          justify-content: space-between;
          display: flex;
          box-sizing: border-box;
          flex-direction: row;
        }
        .nav-dialog-header .nav-link {
          align-self: flex-start;
        }
        .nav-link {
          white-space: nowrap;
          text-decoration: none;
          margin: auto 0;
          font: 400 21px "Crimson Text", serif;
        }
        .dialog-navigation {
          background-color: #fff;
          display: flex;
          width: 100%;
          gap: 10px;
          align-content: flex-start;
          flex-direction: column;
          padding: 50px 24px;
        }
        .dialog-navigation-container {
          justify-content: center;
          display: grid;
        }
      </style>
      <div>
        <div id="navDialog" class="nav-dialog">
          <header class="nav-dialog-header">
            <div class="main-container">
              <a class="mobile-logo" href="./index.html">
                <img src="./assets/NewsletterTemplate-1pg-transformed.png" alt="mobile alex and asher logo" />
              </a>
              <button class="close-wrapper" onclick="closeNav()">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M27.3437 24.1625L19.1812 16L27.3437 7.83755C28.225 6.9563 28.225 5.53755 27.3437 4.6563C26.4625 3.77505 25.0437 3.77505 24.1625 4.6563L16 12.8188L7.83749 4.6563C6.95624 3.77505 5.53749 3.77505 4.65624 4.6563C3.77499 5.53755 3.77499 6.9563 4.65624 7.83755L12.8187 16L4.65624 24.1625C3.77499 25.0438 3.77499 26.4625 4.65624 27.3438C5.53749 28.225 6.95624 28.225 7.83749 27.3438L16 19.1813L24.1625 27.3438C25.0437 28.225 26.4625 28.225 27.3437 27.3438C28.2187 26.4625 28.2187 25.0375 27.3437 24.1625Z"
                  fill="black" />
                </svg>
              </button>
            </div>
          </header>
          <div class="dialog-navigation-container">
            <nav class="dialog-navigation">
              <a href="./about-us.html" class="nav-link">About Us</a>
              <a href="./services.html" class="nav-link">Services</a>
              <a href="./shop.html" class="nav-link">Shop</a>
              <a href="https://www.google.com/maps/place/Alex+%26+Asher/@35.4587539,-78.5025389,8z/data=!3m1!4b1!4m6!3m5!1s0x4553d12bf734747f:0xaf76986437b14c5d!8m2!3d35.4587539!4d-78.5025389!16s%2Fg%2F11s7rg0y54?entry=ttu"
                class="nav-link" target="_blank">Leave A Review</a>
            </nav>
          </div>
        </div>
        <header class="mobile-header">
          <div class="main-container">
            <a class="mobile-logo" href="./index.html">
              <img src="./assets/NewsletterTemplate-1pg-transformed.png" alt="mobile alex and asher logo" />
            </a>
            <button class="more-wrapper" onclick="openNav()">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M5.07 20.5701C7.59394 20.5701 9.64 18.524 9.64 16.0001C9.64 13.4761 7.59394 11.4301 5.07 11.4301C2.54606 11.4301 0.5 13.4761 0.5 16.0001C0.5 18.524 2.54606 20.5701 5.07 20.5701Z"
                fill="black" />
                <path
                d="M16 20.5701C18.5239 20.5701 20.57 18.524 20.57 16.0001C20.57 13.4761 18.5239 11.4301 16 11.4301C13.4761 11.4301 11.43 13.4761 11.43 16.0001C11.43 18.524 13.4761 20.5701 16 20.5701Z"
                fill="black" />
                <path
                d="M26.93 20.5701C29.4539 20.5701 31.5 18.524 31.5 16.0001C31.5 13.4761 29.4539 11.4301 26.93 11.4301C24.4061 11.4301 22.36 13.4761 22.36 16.0001C22.36 18.524 24.4061 20.5701 26.93 20.5701Z"
                fill="black" />
              </svg>
            </button>
          </div>
        </header>
      </div>
    `;
  }
}

customElements.define("desktop-header-component", DesktopHeader);
customElements.define("mobile-header-component", MobileHeader);