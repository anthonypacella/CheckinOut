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
                        <td><button class = "delete btn btn-danger" type="submit" data-val="${data[i].id}">Delete</button></td>   
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

const bookTable = document.querySelector('#bookTable');

bookTable.addEventListener('click', function(event) {
    var element = event.target;

    if (element.matches(".delete")) {
        var state = element.getAttribute('data-val');

        deleteRow(state);
    }

});

function deleteRow(rowid) {
    fetch(`/api/books/${rowid}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    })
    .then(res => {
        if(res.ok) {console.log("DELETE request successful")}
        else {console.log("DELETE request unsuccessful")}
        return res
    })
    .then(document.location.reload());
}