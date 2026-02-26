document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        // Send form data to the server
        fetch('/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(response => {
            if (response.ok) {
                alert('Thanks, your message has been sent.');
                document.getElementById("contactForm").reset();  // Clear the form
            } else {
                alert('There was a problem sending your message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending message.');
        });
    } else {
        alert("Please fill in all fields.");
    }
});

// Auto pause video when off screen
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("heroVideo");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        },
        {
            threshold: 0.5 // 50% visible before playing
        }
    );

    observer.observe(video);
});

const video = document.getElementById("heroVideo");

video.addEventListener("loadeddata", () => {
    video.classList.add("loaded");
});
