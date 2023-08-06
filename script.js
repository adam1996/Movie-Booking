const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied'); //grabs all seats into a node list / similar to an array
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')

const ticketPrice = movieSelect.nodeValue; 

console.log(ticketPrice);

