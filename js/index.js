function openNav() {
    document.getElementById("mySidenavs").classList.add("open");
    document.getElementById("menuOverlay").classList.add("active");
}

function closeNav() {
    document.getElementById("mySidenavs").classList.remove("open");
    document.getElementById("menuOverlay").classList.remove("active");
}



//  header sticky js start  
const header = document.querySelector("header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 40) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});
//  header sticky js end


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Show error function
    function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
    }

    // Remove error function
    function removeError(input, errorElement) {
        input.classList.remove('error');
        errorElement.classList.remove('show');
    }

    // Validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Validate form on submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Validate first name
        if (firstName.value.trim() === '') {
            showError(firstName, document.getElementById('firstNameError'), 'First name is required');
            isValid = false;
        } else {
            removeError(firstName, document.getElementById('firstNameError'));
        }

        // Validate last name
        if (lastName.value.trim() === '') {
            showError(lastName, document.getElementById('lastNameError'), 'Last name is required');
            isValid = false;
        } else {
            removeError(lastName, document.getElementById('lastNameError'));
        }

        // Validate email
        if (email.value.trim() === '') {
            showError(email, document.getElementById('emailError'), 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, document.getElementById('emailError'), 'Please enter a valid email address');
            isValid = false;
        } else {
            removeError(email, document.getElementById('emailError'));
        }

        // Validate message
        if (message.value.trim() === '') {
            showError(message, document.getElementById('messageError'), 'Message is required');
            isValid = false;
        } else {
            removeError(message, document.getElementById('messageError'));
        }

        // If form is valid, show success message
        if (isValid) {
            successMessage.classList.add('show');
            form.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        }
    });

    // Real-time validation as user types
    firstName.addEventListener('input', function () {
        if (firstName.value.trim() !== '') {
            removeError(firstName, document.getElementById('firstNameError'));
        }
    });

    lastName.addEventListener('input', function () {
        if (lastName.value.trim() !== '') {
            removeError(lastName, document.getElementById('lastNameError'));
        }
    });

    email.addEventListener('input', function () {
        if (email.value.trim() !== '' && isValidEmail(email.value.trim())) {
            removeError(email, document.getElementById('emailError'));
        }
    });

    message.addEventListener('input', function () {
        if (message.value.trim() !== '') {
            removeError(message, document.getElementById('messageError'));
        }
    });
});