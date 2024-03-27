// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalBtn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on the button, open the modal

let form = document.querySelector('#myForm');
form.classList.add('flex', 'flex-col', 'justify-center', 'w-full', 'z-10', 'items-center')
let div = `<div class='p-3 rounded-md flex flex-col md:flex-row items-center  justify-center'>
<button id='copybtn' onclick="copyText()" class=" overflow-x-auto  bg-yellow-300 block active:bg-yellow-500 px-4 py-2 shadow-lg rounded-md z-50"><i class='fas fa-copy'></i></button>
<p id='address' class=' w-11/12 uppercase text-center tracking-normal text-xs p-4 text-wrap'>0xaaBajksdbasd89y898wnefe</p>
</div>`
form. innerHTML += div

form.querySelector('img').classList.add('md:w-full', 'w-[150px]', 'md:h-full', 'h-[150px]')

let address = document.querySelector('#address');

modalBtn.onclick = function() {
    modal.classList.replace("hidden", 'flex');
    document.body.classList.add('overflow-hidden')
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.classList.replace("flex", 'hidden');
    document.body.classList.remove('overflow-hidden')
}

function copyText() {
    
    let text = address.textContent || address.innerText;
    navigator.clipboard.writeText(text)
    document.getElementById('copybtn').classList.add('bg-yellow-400')
    
 }
 

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.replace("flex", 'hidden');
        document.body.classList.remove('overflow-hidden')
    }
}

// Form submission handling
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // You can add your logic to handle form submission here, e.g., sending data to a server
    console.log("Form submitted");
    // Close the modal after form submission
    modal.classList.replace("flex", 'hidden');
}
