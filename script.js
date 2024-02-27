function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
}



function getElementValueById(elementId){
    const value =document.getElementById(elementId).value;
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const text = document.getElementById(elementId).innerText;
    return text;
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

let seatLeft= getElementTextById('seatLeft');
const seats = document.getElementsByClassName("seat");
const tbody = document.getElementById("tbody");
let count= 0;
let price=0;
for(let seat of seats){
    
    seat.addEventListener('click',seatClick)        
    
    function seatClick(){
        count +=1;  
        
        if(count<=4){
            price+=550;
            seatLeft -=1;
            setTextElementValueById('totalPrice', price); 
            setTextElementValueById('grandTotal', price);
            setTextElementValueById('seatLeft', seatLeft);
            const seatId= seat.innerText;
            setBackgroundColorById(seatId);

            setTextElementValueById('selectedSeat', count)
            const selectedSeat=document.getElementById('selectedSeat')
            selectedSeat.classList.add('bg-green-400')

            let tr=document.createElement('tr');
            let td1=document.createElement('td');
            td1.classList.add('same')
            td1.innerText=seat.innerText;
            let td2=document.createElement('td');
            td2.innerText='Economey'
            let td3=document.createElement('td');
            td3.innerText=550;

            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);
            
        }

        seat.disabled=true;
        seat.removeEventListener('click', seatClick)

        return;
        
    }
}



const apply= document.getElementById('apply');

apply.addEventListener('click', function(){
    const cupon = getElementValueById('cupon');
    if(cupon==='NEW15'){
        const grandTotal = parseFloat(getElementTextById('grandTotal'));
        let discount =grandTotal*0.15;
        let newGrandTotal=grandTotal-discount
        setTextElementValueById('grandTotal', newGrandTotal);
        setTextElementValueById('discountPrice', discount);
        hideElementById('hide');
        showElementById('show');
        
    }else if(cupon==='Couple 20'){
        const grandTotal = parseFloat(getElementTextById('grandTotal'));
        let discount =grandTotal*0.2;
        let newGrandTotal=grandTotal-discount;
        setTextElementValueById('grandTotal', newGrandTotal);
        setTextElementValueById('discountPrice', discount);
        hideElementById('hide');
        showElementById('show');
    }else{
        alert('Invalid cupon')
    }
})

const next=document.getElementById('next');
const number=document.getElementById('number').addEventListener('keyup', function(e){
    next.removeAttribute('disabled');
})


