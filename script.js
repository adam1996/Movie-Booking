const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied'); //grabs all seats into a node list / similar to an array
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')

populateUI();

let ticketPrice = +movieSelect.value; 

//Save selected movie index & price
function setMovieDate(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // Copy selected seats in arr --> Map through and create a new array of indexes for seats to save.
    const seatsIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    }) //map over for each as it returns an arr

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex)); //JSON stringify as array must be a str 
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//Retrieve data from LS and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')); //opposite of stingify to convert back into arr
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1 ){
                //if seat is present add class selected
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}






// Movie selection event:
movieSelect.addEventListener('change', (event) => {
    ticketPrice = +event.target.value; //updating value for ticketprice based on what movie is selected
    setMovieDate(event.target.selectedIndex, event.target.value);
    updateSelectedCount();
})

// Seat click toggle
container.addEventListener('click', (event) => {
    if(event.target.classList.contains('seat') && !event.target.classList.contains('occuiped')) {
        event.target.classList.toggle('selected');

        updateSelectedCount();
    }
})
document.addEventListener('DOMContentLoaded', function() {
    const purchaseButton = document.getElementById('purchaseSelectionButton');
    const modal = document.getElementById('checkout'); 
    const closeCheckout = document.querySelector('.close');
    const confirmPurchaseButton = document.getElementById('confirmPurchaseButton');

    purchaseButton.addEventListener('click', function() {
    modal.style.display = 'block'; 
    });

    closeCheckout.addEventListener('click', function() {
    modal.style.display = 'none'; 
    });

    confirmPurchaseButton.addEventListener('click', function() {
    // Perform purchase logic here
    modal.style.display = 'none'; 
});

  });
