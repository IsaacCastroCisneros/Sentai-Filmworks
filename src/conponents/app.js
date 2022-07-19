document.addEventListener("DOMContentLoaded", function(event) { 
  var scrollpos = localStorage.getItem('scrollpos');
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
  localStorage.setItem('scrollpos', window.scrollY);
};
//toggle menu
const body = document.getElementsByTagName('body')[0];
const cancel = document.querySelector('.nav-bar__cancel-btn');
document.addEventListener('click',(e)=>
{
    const btn = e.target.matches('[data-nav-bar__hamburger]');
    const dropMenu = e.target.closest('[data-nav-bar__menu]');
  
    if(!btn && dropMenu!=null)
    return 
    let menuActual; 
    if(btn)
    {
      menubar = document.querySelector('.nav-bar__menu-container');
      menuActual= e.target.closest('[data-nav-bar__menu]');
      menuActual.classList.toggle('active');
      header.style.top='0';
      body.style.overflow='auto';
    }
    document.querySelectorAll('[data-nav-bar__menu].active').forEach((menu)=>
    {  
      cancel.addEventListener('click',()=>
      {
        menu.classList.remove('active');
        body.style.overflow='auto';
      })
      console.log(menubar);
      if(menu===menubar)
      {
        body.style.overflow='hidden';
      }
      if(menu===menuActual)
      return 
      menu.classList.remove('active');
      body.style.overflow='auto';
    })
     
});

//carosuel


