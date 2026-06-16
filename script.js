document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const navLinks = document.getElementById('navLinks');
    const contactForm = document.getElementById('contact-form');

    // 📱 BURGER MENU
    if (burgerBtn && navLinks) {
        burgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ✉️ FITANTANANA NY FORMULAIRE (AJAX)
    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const data = new FormData(event.target);
            
            fetch(event.target.action, {
                method: contactForm.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert("Merci beaucoup ! Votre message a été envoyé avec succès.");
                    contactForm.reset();
                } else {
                    alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
                }
            }).catch(error => {
                alert("Impossible d'envoyer le message. Veuillez vérifier votre connexion internet.");
            });
        });
    }

    // =========================================================
    // 🎞️ FITANTANANA NY POP-UP VIDEO (MODAL) - 100% OFFLINE
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.getElementById('closeModal');
    const videoButtons = document.querySelectorAll('.btn-watch-video');

    // Rehefa kikitihina ny bokotra "Voir la vidéo"
    videoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoSrc = button.getAttribute('data-video'); // Maka ny rohin'ny video
            modalVideo.setAttribute('src', videoSrc); // Ampidirina ao amin'ny video tag
            videoModal.classList.add('active'); // Sokafana ny pop-up
            modalVideo.play(); // Alefa avy hatrany ilay video
        });
    });

    // Rehefa manindry ny "X" hanakatona ny pop-up
    if (closeModal && videoModal) {
        closeModal.addEventListener('click', () => {
            videoModal.classList.remove('active'); // Akatona ny pop-up
            modalVideo.pause(); // Atopato ny video
            modalVideo.setAttribute('src', ''); // Fafana ny loharano mba tsy handeha any ambadika any
        });

        // Rehefa manindry ny faritra mainty ivelan'ilay video koa dia mikatona izy
        videoModal.addEventListener('click', (event) => {
            if (event.target === videoModal) {
                videoModal.classList.remove('active');
                modalVideo.pause();
                modalVideo.setAttribute('src', '');
            }
        });
    }
    // =========================================================
});