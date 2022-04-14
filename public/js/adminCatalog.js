function buildTable(data) {
    var table = document.getElementById('adminTable');

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].password}</td>
                        <td><button class = "delete btn btn-danger" type="submit" data-val="${data[i].id}">Delete</button></td>   
                    </tr>`
        table.innerHTML += row;
    }
}

const adminData = 

fetch('/api/admin')    
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

const adminTable = document.querySelector('#adminTable');

adminTable.addEventListener('click', function(event) {
    var element = event.target;

    if (element.matches(".delete")) {
        var state = element.getAttribute('data-val');

        deleteRow(state);
    }

});

function deleteRow(rowid) {
    fetch(`/api/admin/${rowid}`, {
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
