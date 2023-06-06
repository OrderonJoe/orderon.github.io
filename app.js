

const navSlide = ()=>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelectorAll(".li-no-display");
    var togglePadding = document.querySelector(".padding-top-5em");
    const navLinks = document.querySelectorAll(".nav-links");


    burger.addEventListener("click", ()=>{

        nav[0].classList.toggle("li-display");
        nav[1].classList.toggle("li-display");
        nav[2].classList.toggle("li-display");
        
        togglePadding.classList.toggle("padding-top-25em");
        
        navLinks.forEach((link, index)=>{
            
            if(link.style.animation){
                link.style.animation = ""
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.2}s';
            }
          
        });
    });



    
}

navSlide();