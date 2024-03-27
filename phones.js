let menu = document.querySelector("#menu");
const btn = document.createElement('button'); 
btn.innerHTML =`<i class='fas fa-close text-4xl'></i>`;
btn.setAttribute('id', 'close')
btn.setAttribute('class', 'hidden sm:hidden font-bold text-2xl capitalize px-4 py-1 font-medium text-black rounded-md backdrop-blur-2xl z-50 text-gray-900')
document.querySelector('header').appendChild(btn)

let header = document.querySelector('header');
let navBtn = document.querySelectorAll('.nav-btn');
let main = document.getElementById("mainDiv");

  menu.addEventListener("click", (e) => {
    document.getElementById("sideNav").classList.remove("right-[-1000%]");
    document.getElementById("sideNav").classList.add("right-0");
    
    menu.classList.replace("block","hidden");
    btn.classList.replace("hidden","block");
  });

   // close side menu
   btn.addEventListener("click", () => {
    document.getElementById("sideNav").classList.add("right-[-1000%]");
    document.getElementById("sideNav").classList.remove("right-0");
    document.getElementById("mainDiv").classList.remove("blur-sm");

    btn.classList.replace("block","hidden")
    menu.classList.replace("hidden","block");
    
  });



document.addEventListener("DOMContentLoaded", function() {
  const images = [ 
  "../images/Tesla-Explorer-9_black_back.jpg", 
  "../images/Tesla-Explorer-9_black_bottom-view.jpg", 
  "../images/Tesla-Explorer-9_black_front.jpg",  
  "../images/Tesla-Explorer-9_black_side-1.jpg",
  "../images/Tesla-Explorer-9_black_side-2.jpg",
  "../images/Tesla-Explorer-9_black_top-view.jpg",
]; // Add your image URLs
    let currentIndex = 0;
  
    function fadeOut(element) {
      let opacity = 1;
      const timer = setInterval(function() {
        if (opacity <= 0) {
          clearInterval(timer);
          element.style.display = "none";
          fadeIn(element);
        }
        element.style.opacity = opacity;
        opacity -= 0.1;
      }, 50);
    }
  
    function fadeIn(element) {
      let opacity = 0;
      element.src = images[currentIndex];
      element.style.display = "block";
      const timer = setInterval(function() {
        if (opacity >= 1) {
          clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.1;
      }, 50);
    }
  
    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      const img = document.querySelector("#slideshow img");
      fadeOut(img);
    }
  
    function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      const img = document.querySelector("#slideshow img");
      fadeOut(img);
    }
  
    const slideshow = document.querySelector("#slideshow");
    const nextBtn = document.querySelector("#next");
    const prevBtn = document.querySelector("#prev");
  
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);
  
    const img = slideshow.querySelector("img");
    fadeIn(img);
  }, 5000)  ;
  