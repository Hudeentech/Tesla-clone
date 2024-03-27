let menu = document.querySelector("#menu");
const btn = document.createElement('button'); 
btn.innerHTML =`<i class='fas fa-close text-xl'></i>`;
btn.setAttribute('id', 'close')
btn.setAttribute('class', 'hidden sm:hidden capitalize px-2  backdrop-blur-2xl z-50 text-gray-900')
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
