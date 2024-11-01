document.addEventListener('DOMContentLoaded', function() {
    const text = "하유경의 포트폴리오 입니다";
    let index = 0;
    const typingText = document.getElementById('typing-text');
    const navLinks = document.querySelectorAll('.nav-list a');

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200);
        } else {
            setTimeout(deleteText, 2500);
        }
    }

    function deleteText(){
        if(index >= 0){
            typingText.textContent = text.substring(0, index);
            index--;
            setTimeout(deleteText, 100);
        } else {
            setTimeout(type, 1000);
        }
    }

    type(); // 타이핑 시작
  
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const headerOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
  
    const scrollToTopButton = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });
  
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const navLinks = document.querySelectorAll('.nav-list a');
        const brand = document.querySelector('.brand a');
        if (window.scrollY > 100) {
            header.classList.add('transparent-navbar');
            navLinks.forEach(link => {
                link.classList.add('black-text');
                link.classList.add('black-hover');
            });
            brand.classList.add('black-text');
        } else {
            header.classList.remove('transparent-navbar');
            navLinks.forEach(link => {
                link.classList.remove('black-text');
                link.classList.remove('black-hover');
            });
            brand.classList.remove('black-text');
        }
    });
});