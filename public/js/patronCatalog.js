function buildTable(data) {
    var table = document.getElementById('patronTable');

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].user_name}</td>
                        <td>${data[i].first_name} ${data[i].middle_initial} ${data[i].last_name}</td>
                        <td>${data[i].address_1} ${data[i].address_2}</td>
                        <td>${data[i].city}</td>
                        <td>${data[i].state}</td>
                        <td>${data[i].zip}</td>
                    </tr>`
        table.innerHTML += row;
    }
}

const patronData = 

fetch('/api/patron')    
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