//CHANGE NAVBAR STYLE ON SCROLL//

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
 })
 
 //SHOWHIDE FAQ ANSWER//
 
 const faqs = document.querySelectorAll('.faq');
 
 faqs.forEach(faq => {
     faq.addEventListener('click', () => {
         faq.classList.toggle('open');
 
         // CHANGE ICON //
 
         const icon = faq.querySelectorAll('.faq_icon i');
         if(icon.className === "uil uil-plus") {
             icon.className = "uil uil-minus";
         } else{
             icon.className = 'uil uil-plus';
         }
     })
 })
 
 //SHOWBAR NAVBAR
 
 const menu = document.querySelector(".nav_menu");
 const menuBtn = document.querySelector("#open-menu-btn");
 const closeBtn = document.querySelector("#close-menu-btn");
 
 
 menuBtn.addEventListener('click', () => {
     menu.style.display = "flex";
     closeBtn.style.display = "inline-block";
     menuBtn.style.display = "none";
 })
 
 //SHOW NAVABR CLOSEBAR
 
 const closeNav = () => {
     menu.style.display = "none";
     closeBtn.style.display = "none";
     menuBtn.style.display = "inline-block";
 }
 
 closeBtn.addEventListener('click', closeNav)
 
 const sr = scrollReveal ({
    distance: '300px',
    duration:2500,
    reset:true,
})