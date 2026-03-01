document.addEventListener('DOMContentLoaded', () => {

    
    window.copyPath = () => {
        const path = "C:\\Windows\\System32\\drivers\\etc";
        navigator.clipboard.writeText(path).then(() => {
            alert("Chemin copié ! Collez-le dans votre explorateur de fichiers.");
        });
    };

    
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    
    document.querySelectorAll('.step-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("%c Tekaz Unlock System Loaded ", "background: #ff3333; color: #fff; font-weight: bold;");

});
