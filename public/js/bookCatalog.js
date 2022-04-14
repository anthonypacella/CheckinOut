function buildTable(data) {
    var table = document.getElementById('bookTable');

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].isbn}</td>
                        <td>${data[i].title}</td>
                        <td>${data[i].author}</td>
                        <td>${data[i].year_published}</td>
                        <td>${data[i].edition}</td>
                        <td>${data[i].price}</td>
                        <td>${data[i].subject}</td>
                        <td>${data[i].description}</td>
                    </tr>`
        table.innerHTML += row;
    }
}

const booksData = 

fetch('/api/books')    
.then(function (response) {
    return response.json();
})
.then(function (data) {
    buildTable(data);
});

var backButtonEl = document.getElementById('Back');

backButtonEl.addEventListener('click', function() {
    console.log("Back Admin");
    document.location.replace('/admin/dashboard');
})