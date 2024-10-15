const navLinks = document.querySelectorAll('nav ul li a');
console.log(navLinks);

     
        navLinks.forEach(link => {
           
            link.addEventListener('click', function(event) {
                event.preventDefault();  


                const targetId = this.getAttribute('href'); 
                
                const targetSection = document.querySelector(targetId);
console.log(targetSection);

               
                window.scrollTo({
                    top: targetSection.offsetTop - 50, 
                    left: targetSection.offsetLeft + 100,  
                    behavior: 'smooth'
                });
            });
        });