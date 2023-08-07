const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied'); //grabs all seats into a node list / similar to an array
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')

const ticketPrice = +movieSelect.value; 

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}
// click on seats to toggle
container.addEventListener('click', (event) => {
    if(event.target.classList.contains('seat') && !event.target.classList.contains('occuiped')) {
        event.target.classList.toggle('selected');

        updateSelectedCount();
    }
})
