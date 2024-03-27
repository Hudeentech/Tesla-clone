let menu = document.querySelector("#menu");
const btn = document.createElement('button')
btn.innerHTML =`<i class='fas fa-close text-4xl'></i>`;
btn.setAttribute('id', 'close')
btn.setAttribute('class', 'hidden sm:hidden font-bold text-2xl capitalize px-4 py-1 font-medium text-black rounded-md backdrop-blur-2xl z-50 text-gray-900')
document.querySelector('#containerNav').appendChild(btn)

let header = document.querySelector('header');
let navBtn = document.querySelectorAll('.nav-btn');
let maindiv = document.querySelector("#mainDiv");

  menu.addEventListener("click", (e) => {
    document.getElementById("sideNav").classList.remove("right-[-1000%]");
    document.getElementById("sideNav").classList.add("right-0");
    maindiv.classList.add("blur-sm");

    menu.classList.replace("block","hidden");
    btn.classList.remove('hidden')
    btn.classList.add('block')
    
  });

   // close side menu
   btn.addEventListener("click", () => {
    document.getElementById("sideNav").classList.add("right-[-1000%]");
    document.getElementById("sideNav").classList.remove("right-0");
    document.getElementById("mainDiv").classList.remove("blur-sm");

    btn.classList.replace("block","hidden")
    menu.classList.replace("hidden","block");
    
  });



 navBtn.forEach(btn => {
  header.addEventListener('mouseover', ()=>{
      maindiv.classList.remove("blur-0");
      maindiv.classList.add("blur-lg");

    img = header.querySelector('img').src ='../tesla-8.svg';
    img = header.querySelector('img').style.zIndex=100;
   })
  
 });
 

 header.addEventListener('mouseleave', ()=>{
  navBtn.forEach(element => {
    img = header.querySelector('img').src ='../tesla-9.svg';
 
  });

  maindiv.classList.remove("blur-lg");
  maindiv.classList.add("blur-0");

  console.log(maindiv);
 })

 
maindiv.addEventListener('scroll', function(e) {
  let container = document.querySelector('#containerNav');

  if (maindiv.scrollTop > 0) {
    container.style.backgroundColor = '#07070778'
    btn.classList.add('text-gray-300')
    container.style.position = 'fixed'
    container.classList.remove('absolute')
    container.classList.add('w-full')
    container.classList.add('px-4')
  }else{
    container.style.position = 'fixed'
    container.classList.remove('absolute')
    container.style.backgroundColor = 'transparent'
    container.classList.remove('w-full')
   
  }

});