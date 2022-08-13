var reset = document.querySelector('#bt')
var squares = document.querySelectorAll('td') 

function restart(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '' ;
        
    }
}
reset.addEventListener('click', restart)


function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}