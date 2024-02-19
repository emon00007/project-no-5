const buttons = document.getElementsByClassName('aa');
let Seatsleft = 28;
let count = 0;
let seatrate = 0;
for (let button of buttons) {
    button.addEventListener('click', function () {
        button.classList.add('bg-[#1DD100]');
        Seatsleft -=1
        setInnerTextById('Seats-left',Seatsleft );
        count += 1
        setInnerTextById('add-seat',count );

        
        const selectSeat=document.getElementById('selecte-seat');
        const ul=document.createElement('ul')
       const seatName=document.createElement('li');
       const economoy=document.createElement('li');
       const seatPrice=document.createElement('li');

       seatName.innerText=button.innerText;
       economoy.innerText='Economoy';
       seatPrice.innerText='550';

       ul.appendChild(seatName);
       ul.appendChild(economoy);
       ul.appendChild(seatPrice);
       selectSeat.appendChild(ul);

       seatrate+=550
       setInnerTextById('seat-rate',seatrate );

    

    if (count === maxSeats) {
        disableRemainingButtons();
        
    }
    
    button.removeEventListener('click', arguments.callee);

    }
    )
}

document.getElementById("button-applay").addEventListener("click", function () {
    const cupon = document.getElementById('discount').value
    if( cupon === "Couple 20"){
        const mainGrand = seatrate - (seatrate * 20) / 100;
        setInnerTextById('Grand-total',mainGrand )
    }
 else if (cupon === "NEW15") {
    const mainGrand = seatrate - (seatrate * 15) / 100;
    setInnerTextById('Grand-total',mainGrand )
  } else {
    alert("Sorry your cupon invalid");
    return;
  }
  document.getElementById("cupon-section").classList.add("hidden");
})



