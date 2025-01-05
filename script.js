document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const serviceID = "service_knnf9k3";
        const templateID = "template_6glqtz8";
        
        emailjs.sendForm(serviceID, templateID, this)
            .then(function() {
                alert('Email sent successfully!');
            }, function(error) {
                alert('Failed to send email. Please try again.');
            });
    });
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
