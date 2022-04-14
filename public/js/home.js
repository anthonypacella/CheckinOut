const patronImgEl = document.querySelector('#patron-login-img');
const adminImgEl = document.querySelector('#admin-login-img');

patronImgEl.addEventListener('click', function redirectPage(event) {
    event.preventDefault();
    document.location.replace('/login')
});

adminImgEl.addEventListener('click', function redirectPage(event) {
    event.preventDefault();
    document.location.replace('/admin/login')
});
