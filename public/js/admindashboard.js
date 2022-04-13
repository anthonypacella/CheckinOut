const addAdminEl = document.querySelector('#addAdminbtn');
const addPatronEl = document.querySelector('#addPatronbtn');
const addBookEl = document.querySelector('#addBookbtn');



const addAdministrator = async (event) => {
    event.preventDefault();

    const name = $('#adminName').val();
    const email = $('#adminEmail').val();
    const password = $('#adminPassword').val();

    const response = await fetch('/api/admin/add/administrator', {
        method: 'POST',
        body: JSON.stringify({email, name, password}),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/')
    }
}

const addPatron = async (event) => {
    event.preventDefault();

    const user_name = $('#patronUsername').val();
    const first_name = $('#patronFirstName').val();
    const middle_initial = $('#patronMiddleInitial').val();
    const last_name = $('#patronLastName').val();
    const address_1 = $('#patronAddressLine1').val();
    const address_2 = $('#patronAddressLine2').val();
    const city = $('#patronCity').val();
    const state = $('#patronState').val();
    const zip = $('#patronZip').val();

    const response = fetch('/api/admin/add/patron', {
        method: 'POST',
        body: JSON.stringify({user_name, first_name, middle_initial, last_name, address_1, address_2, city, state, zip}),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/')
    }

}


const addBook = async (event) => {
    event.preventDefault();

    const isbn = $('#bookISBN').val();
    const title = $('#bookTitle').val();
    const author = $('#bookAuthor').val();
    const year_published = $('#bookYearPublished').val();
    const edition = $('#bookEdition').val();
    const price = $('#bookPrice').val();
    const subject = $('#bookSubject').val();
    const description = $('#bookDescription').val();

    const response = fetch('/api/admin/add/book', {
        method: 'POST',
        body: JSON.stringify({isbn, title, author, year_published, edition, price, subject, description}),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/')
    }
}

addAdminEl.addEventListener('click', addAdministrator);
addPatronEl.addEventListener('click', addPatron);
addBookEl.addEventListener('click', addBook);
