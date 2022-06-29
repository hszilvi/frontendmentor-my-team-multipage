
// hamburger menu for mobile view
const hamburgerMenuBtn = document.querySelector('.hamburger__dropdown');
const hamburgerMenuDropdown = document.querySelector('.primary-navigation');
const overlay = document.querySelector('.overlay');
const viewWidth = window.innerWidth;

const homeBtn = document.querySelectorAll('.active-home');
const homeSite = document.querySelector('#home');
const aboutBtn = document.querySelectorAll('.active-about');
const aboutSite = document.querySelector('#about');

const cardOpenBtn = document.querySelectorAll('.card-open-button');

hamburgerMenuBtn.addEventListener('click', () => {
    if (!hamburgerMenuBtn.classList.contains('open')) {     
        hamburgerMenuBtn.classList.add('open');
        hamburgerMenuDropdown.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        hamburgerMenuBtn.classList.remove('open');
        hamburgerMenuDropdown.style.display = 'none';
        overlay.style.display = 'none';
    } 
});
// opens contact site
const contactBtn = document.querySelectorAll('.button');
contactBtn.forEach((item) => {
    item.addEventListener('click', () => {
        document.location = 'contact.html';
    }) 
});

// manipulate card content on about site
cardOpenBtn.forEach((item) => {
    item.addEventListener('click', () => {
if (!item.classList.contains('active')) {
    item.previousElementSibling.style.display = 'block';
    item.previousElementSibling.previousElementSibling.style.display = 'none';
} else {
    item.previousElementSibling.style.display = 'none';
    item.previousElementSibling.previousElementSibling.style.display = 'block';  
}
        // turn the + button to x
        item.classList.toggle('active');
    });
});

// contact form validation
const submitBtn = document.querySelector('#submit-button');
const emailField = document.querySelector('#email');
const companyField = document.querySelector('#company');
const titleField = document.querySelector('#title');
const messageField = document.querySelector('#message');

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const nameValue = document.querySelector('#name');
    const emailValue = document.querySelector('#email');
    const companyValue = document.querySelector('#company');
    const titleValue = document.querySelector('#title');
    const messageValue = document.querySelector('#message');
    const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
// user name check
    if (nameValue.value.trim() === '') {
        let parent = nameValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = nameValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }

// email valid check
    if (emailValue.value.trim() === '') {
        let parent = emailValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else if (!regex.test(emailValue.value)) {
        let parent = emailValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = emailValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }

// company name check
    if (companyValue.value.trim() === '') {
        let parent = companyValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = companyValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }
// title check
    if (titleValue.value.trim() === '') {
        let parent = titleValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = titleValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }
// message check
    if (messageValue.value.trim() === '') {
        let parent = messageValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = messageValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }
}


