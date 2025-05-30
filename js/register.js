// Form switching logic
function toggleForms(formId) {
    document.querySelectorAll('.form-section').forEach(form => {
        form.classList.add('hidden');
    });
    document.getElementById(formId).classList.remove('hidden');
}
// Toggle password visibility on login form
document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('loginPassword');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }
});

// ✅ Job Seeker Password Toggle
    const seekerToggle = document.getElementById('toggleSeekerPassword');
    const seekerPassword = document.getElementById('seekerPassword');

    if (seekerToggle && seekerPassword) {
        seekerToggle.addEventListener('click', () => {
            const type = seekerPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            seekerPassword.setAttribute('type', type);
            seekerToggle.classList.toggle('fa-eye');
            seekerToggle.classList.toggle('fa-eye-slash');
        });
    }
// ✅ Employer Password Toggle
const employerToggle = document.getElementById('toggleEmployerPassword');
    const employerPassword = document.getElementById('employerPassword');

    if (employerToggle && employerPassword) {
        employerToggle.addEventListener('click', () => {
            const type = employerPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            employerPassword.setAttribute('type', type);
            employerToggle.classList.toggle('fa-eye');
            employerToggle.classList.toggle('fa-eye-slash');
        });
    }
    
    document.addEventListener('DOMContentLoaded', () => {
    // Existing toggles...

    // ✅ Job Seeker Confirm Password Toggle
    const seekerConfirmToggle = document.getElementById('toggleSeekerConfirmPassword');
    const seekerConfirmPassword = document.getElementById('seekerConfirmPassword');

    if (seekerConfirmToggle && seekerConfirmPassword) {
        seekerConfirmToggle.addEventListener('click', () => {
            const type = seekerConfirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            seekerConfirmPassword.setAttribute('type', type);
            seekerConfirmToggle.classList.toggle('fa-eye');
            seekerConfirmToggle.classList.toggle('fa-eye-slash');
        });
    }

    // ✅ Employer Confirm Password Toggle
    const employerConfirmToggle = document.getElementById('toggleEmployerConfirmPassword');
    const employerConfirmPassword = document.getElementById('employerConfirmPassword');

    if (employerConfirmToggle && employerConfirmPassword) {
        employerConfirmToggle.addEventListener('click', () => {
            const type = employerConfirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            employerConfirmPassword.setAttribute('type', type);
            employerConfirmToggle.classList.toggle('fa-eye');
            employerConfirmToggle.classList.toggle('fa-eye-slash');
        });
    }
});

function selectRegisterType(type) {
    toggleForms(type === 'jobSeeker' ? 'jobSeekerForm' : 'employerForm');
}

function validatePassword(password) {
    // Password must be at least 8 characters long and contain at least one number and one letter
    return password.length >= 8 && /[A-Za-z]/.test(password) && /[0-9]/.test(password);
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long and contain at least one letter and one number');
        return false;
    }

    // Here you would typically make an API call to authenticate
    console.log('Login attempt:', { email, password, rememberMe });
    
    // Simulate successful login
    localStorage.setItem('userEmail', rememberMe ? email : '');
    alert('Login successful!');
    return false;
}

function handleRegister(event, type) {
    event.preventDefault();
    
    const isJobSeeker = type === 'jobSeeker';
    const formData = {
        type,
        email: document.getElementById(isJobSeeker ? 'seekerEmail' : 'employerEmail').value,
        password: document.getElementById(isJobSeeker ? 'seekerPassword' : 'employerPassword').value,
        confirmPassword: document.getElementById(isJobSeeker ? 'seekerConfirmPassword' : 'employerConfirmPassword').value
    };

    if (isJobSeeker) {
        formData.fullName = document.getElementById('seekerFullName').value;
    } else {
        formData.companyName = document.getElementById('companyName').value;
        formData.contactName = document.getElementById('employerFullName').value;
    }

    if (!validatePassword(formData.password)) {
        alert('Password must be at least 8 characters long and contain at least one letter and one number');
        return false;
    }

    if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    // Here you would typically make an API call to register
    console.log('Registration:', formData);
    alert('Registration successful! Please check your email to verify your account.');
    toggleForms('loginForm');
    return false;
}

// Initialize form state
document.addEventListener('DOMContentLoaded', () => {
    // Check for remembered email
    const rememberedEmail = localStorage.getItem('userEmail');
    if (rememberedEmail) {
        document.getElementById('loginEmail').value = rememberedEmail;
        document.getElementById('rememberMe').checked = true;
    }

    // Add floating label effect
    document.querySelectorAll('.form-group input').forEach(input => {
        if (input.value) {
            input.labels[0].classList.add('active');
        }

        input.addEventListener('focus', () => {
            input.labels[0].classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.labels[0].classList.remove('active');
            }
        });
    });
});