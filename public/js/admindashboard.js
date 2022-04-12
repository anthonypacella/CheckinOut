const addAdminEl = document.querySelector('#addAdminbtn');
const addPatronEl = document.querySelector('#addPatronbtn');
const addBookEl = document.querySelector('#addBookbtn');



const addAdministrator = async (event) => {
    event.preventDefault();

    const adminUsername = $('#adminUsername').val();

    const response = await fetch('/api/add/administrator', {
        method: 'POST',
        body: JSON.stringify({adminUsername}),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/')
    }
}

const addPatron = async (event) => {
    event.preventDefault();

    const patronUsername = $('#patronUsername').val();
    const patronFirstName = $('#patronFirstName').val();
    const patronMiddleInitial = $('#patronMiddleInitial').val();
    const patronLastName = $('#patronLastName').val();
    const patronAddressLine1 = $('#patronAddressLine1').val();
    const patronAddressLine2 = $('#patronAddressLine2').val();
    const patronCity = $('#patronCity').val();
    const patronState = $('#patronState').val();
    const patronZip = $('#patronZip').val();

    const response = fetch('/api/add/patron', {
        method: 'POST',
        body: JSON.stringify({patronUsername, patronFirstName, patronMiddleInitial, patronLastName, patronAddressLine1, patronAddressLine2, patronCity, patronState, patronZip}),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/')
    }

}


const addBook = async (event) => {
    event.preventDefault();

    const bookISBN = $('#bookISBN').val();
    const bookTitle = $('#bookTitle').val();
    const bookAuthor = $('#bookAuthor').val();
    const bookYearPublished = $('#bookYearPublished').val();
    const bookEdition = $('#bookEdition').val();
    const bookPrice = $('#bookPrice').val();
    const bookSubject = $('#bookSubject').val();
    const bookDescription = $('#bookDescription').val();

    const response = fetch('/api/add/book', {
        method: 'POST',
        body: JSON.stringify({bookISBN, bookTitle, bookAuthor, bookYearPublished, bookEdition, bookPrice, bookSubject, bookDescription}),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/')
    }
}

addAdminEl.addEventListener('click', addAdministrator);
addPatronEl.addEventListener('click', addPatron);
addBookEl.addEventListener('click', addBook);
