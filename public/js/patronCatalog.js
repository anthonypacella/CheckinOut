const Patron = require('../../models/Patron.js');

const patronList = Patron.findAll();

console.log(patronList);

$('#patronTable').text(patronList);