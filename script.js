const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btn_login_menu = document.querySelector('.btn_login_menu');
const icon_close = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btn_login_menu.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

icon_close.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});