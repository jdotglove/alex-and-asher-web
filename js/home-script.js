let slideIndex = 1;
let autoInterval;

document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.getElementsByClassName("more-info-wrapper");
  for (const button of buttons) {
    button.addEventListener("click", (event) => {
      let wrapper = event.target.parentElement.parentElement;
      if (wrapper.className.includes("quadrant-wrapper")) {
        if (wrapper.className.includes(" active")) {
          wrapper.className = "quadrant-wrapper";
        } else {
          wrapper.className = `${wrapper.className} active`;
        }
      } else {
        wrapper = event.target.parentElement.parentElement.parentElement;
        if (wrapper.className.includes("quadrant-wrapper")) {
          if (wrapper.className.includes(" active")) {
            wrapper.className = "quadrant-wrapper";
          } else {
            wrapper.className = `${wrapper.className} active`;
          }
        }
      }
    });
  }

  autoInterval = setInterval(() => {
    if (slideIndex === 3) {
      showSlides(slideIndex = 1);
    } else {
      showSlides(slideIndex += 1);
    }
  }, 2500);
});


showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  const dots = 
  clearInterval(autoInterval);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}