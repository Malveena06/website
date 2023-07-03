document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (let anchorLink of anchorLinks) {
      anchorLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const scrollToOptions = {
            behavior: 'smooth',
          };
          
          targetElement.scrollIntoView(scrollToOptions);
        }
      });
    }
  });
  