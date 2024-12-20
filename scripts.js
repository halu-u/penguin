document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
});

document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    const typedText = document.getElementById('typingHeader');
    const text = "I wonder what the title should be...";
    let index = 0;

    function type() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});
