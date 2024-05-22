class DesktopHeader extends HTMLElement {
  navigationLinks;
  constructor() {
    super();
    this.navigationLinks = `
      <a href="about-us.html" class="nav-link ${window.location.pathname.includes("/about-us") ? "active" : ""}">About Us</a>
      <a href="services.html" class="nav-link ${window.location.pathname.includes("/services") ? "active" : ""}">Services</a>
      <a href="shop.html" class="nav-link ${window.location.pathname.includes("/shop") ? "active" : ""}">Shop</a>
      <a
        href="https://www.google.com/maps/place/Alex+%26+Asher/@35.4587539,-78.5025389,8z/data=!3m1!4b1!4m6!3m5!1s0x4553d12bf734747f:0xaf76986437b14c5d!8m2!3d35.4587539!4d-78.5025389!16s%2Fg%2F11s7rg0y54?entry=ttu"
        class="nav-link ${window.location.pathname.includes("/reviews") ? "active" : ""}"
        target="_blank"
      >Leave A Review</a>
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
            max-width: 100%;
            flex-wrap: wrap;
            display: flex;
            justify-content: space-evenly;
            position: sticky;
            top: 0;
            background-color: white;
            padding: 27px 38px;
          }
          .desktop-header .title > * {
            white-space: nowrap;
            text-decoration: none;
            color: #13263a;
          }
          .desktop-header .description {
            white-space: nowrap;
          }
          .desktop-header .nav {
            flex-wrap: wrap;
            justify-content: flex-end;
          }
          .desktop-header .main-container {
            align-self: center;
            display: flex;
            width: 100%;
            justify-content: space-between;
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
          .desktop-header .logo-wrapper {
            display: flex;
            justify-items: center;
            align-self: center;
            flex-shrink: 1;
            justify-content: space-between;
          }
        }
        
        .desktop-header .title {
          color: #13263a;
          flex-grow: 1;
          flex-shrink: 1;
          position: relative;
          width: max-content;
          font: 400 34px "Crimson Text", serif;
          margin: 0 0 0 0;
        }
        .desktop-header .description {
          color: rgba(19, 38, 58, 0.6);
          margin: 0 0 0 0;
          flex-shrink: 1;
          display: flex;
          margin-left: 20px;
          justify-items: center;
          align-self: center;
          position: relative;
          font: 400 17px "Nunito Sans", sans-serif;
        }

        @media (max-width: 991px) {
          .desktop-header .description {
            white-space: initial;
          }
        }
    
        .desktop-header .nav-section {
          align-self: center;
          justify-content: flex-end;
          display: flex;
          gap: 20px;
          flex-grow: 1;
          flex-shrink: 1;
        }
    
        .desktop-header .nav {
          box-sizing: border-box;
          display: flex;
          align-self: center;
          min-width: 430px;
          padding: 0 20px;
        }
    
        @media (max-width: 991px) {
          .desktop-header .nav-link {
            white-space: initial;
          }
        }
    
        .search-wrapper {
          cursor: pointer;
          display: flex;
          object-position: center;
          width: 22px;
          flex-shrink: 0;
          fill: #000;
          overflow: hidden;
          align-items: center;
          max-width: 100%;
        }
        .nav-link:hover, .nav-link.active {
          text-decoration: underline;
        }
      </style>
      <header class="desktop-header">
        <div class="main-container">
          <section class="logo-wrapper">
            <h1 class="title"><a href="index.html">Alex &amp; Asher</a></h1>
            <p class="description">Specialty shops deserve special attention</p>
          </section>
          <section class="nav-section">
            <nav class="nav">
              ${this.navigationLinks}
            </nav>
            <div class="search-wrapper">
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.9276 9.80206C20.9276 4.40456 16.4058 0 10.8646 0C5.32337 0 0.775391 4.40456 0.775391 9.80206C0.775391 15.1996 5.29723 19.6041 10.8384 19.6041C13.2431 19.6041 15.4387 18.7894 17.1899 17.4146L21.4765 21.59L22.9664 20.1388L18.6537 15.9888C20.0651 14.3085 20.9276 12.1444 20.9276 9.80206ZM10.8384 17.5928C6.4473 17.5928 2.86642 14.1048 2.86642 9.82752C2.86642 5.55026 6.4473 2.06225 10.8384 2.06225C15.2296 2.06225 18.8105 5.55026 18.8105 9.82752C18.8105 14.1048 15.2557 17.5928 10.8384 17.5928Z"
                  fill="black" />
              </svg>
            </div>
          </section>
        </div>
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
            height: 79px;
            position: sticky;
            top: 0;
            box-sizing: border-box;
            justify-content: space-evenly;
            z-index: 2;
          }
          header .title {
            color: #13263a;
            white-space: nowrap;
            justify-content: center;
            text-decoration: none;
            background-color: #fff;
            align-self: center;
            display: flex;
            flex-grow: 1;
            padding: 10px 60px;
            margin: 0;
            font: 400 34px "Crimson Text", serif;
          }
          .mobile-header .main-container {
            top: 0;
            position: fixed;
            justify-content: center;
            background-color: #fff;
            display: flex;
            width: 100%;
            box-sizing: border-box;
            flex-direction: row;
            padding: 10px 24px;
          }
          .nav-dialog-header .main-container {
            padding: 10px 24px;
            width: 100%;
            justify-content: center;
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
        .search-wrapper {
          cursor: pointer;
          display: flex;
          object-position: center;
          width: 22px;
          flex-shrink: 0;
          fill: #000;
          overflow: hidden;
          align-items: center;
          max-width: 100%;
        }
        .more-wrapper {
          cursor: pointer;
          display: flex;
          object-position: center;
          flex-shrink: 0;
          fill: #000;
          overflow: hidden;
          align-items: center;
          max-width: 100%;
          border: none;
          padding: 0;
          background-color: inherit;
        }
        .nav-link:hover {
          text-decoration: underline;
        }
      </style>
      <header class="mobile-header">
      
      <div class="main-container">
        <div class="search-wrapper">
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.9276 9.80206C20.9276 4.40456 16.4058 0 10.8646 0C5.32337 0 0.775391 4.40456 0.775391 9.80206C0.775391 15.1996 5.29723 19.6041 10.8384 19.6041C13.2431 19.6041 15.4387 18.7894 17.1899 17.4146L21.4765 21.59L22.9664 20.1388L18.6537 15.9888C20.0651 14.3085 20.9276 12.1444 20.9276 9.80206ZM10.8384 17.5928C6.4473 17.5928 2.86642 14.1048 2.86642 9.82752C2.86642 5.55026 6.4473 2.06225 10.8384 2.06225C15.2296 2.06225 18.8105 5.55026 18.8105 9.82752C18.8105 14.1048 15.2557 17.5928 10.8384 17.5928Z"
              fill="black" />
          </svg>
        </div>
        <h1 class="title"><a href="index.html">Alex & Asher</a></h1>
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
    `;
  }
}

customElements.define("desktop-header-component", DesktopHeader);
customElements.define("mobile-header-component", MobileHeader);