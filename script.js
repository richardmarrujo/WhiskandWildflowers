// Contact Form Submission
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        fetch('/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })
        .then(res => res.ok 
            ? (alert('Thanks, your message has been sent.'), document.getElementById("contactForm").reset()) 
            : alert('There was a problem sending your message.')
        )
        .catch(() => alert('Error sending message.'));
    } else {
        alert("Please fill in all fields.");
    }
});

// Video Fade In + Auto Pause on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("heroVideo");

    // Fade-in on load
    video.addEventListener("loadeddata", () => video.classList.add("loaded"));

    // IntersectionObserver to pause/play
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) video.play();
            else video.pause();
        });
    }, { threshold: 0.5 });

    observer.observe(video);
});
