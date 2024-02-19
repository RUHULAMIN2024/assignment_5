function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
}



function getTextElementValueById(elementId){
    const value = parseInt(document.getElementById(elementId).innerText);
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

let seatLeft= getTextElementValueById('seatLeft');
const seats = document.getElementsByClassName("seat");
let count= 0;
for(let seat of seats){
    
    
    seat.addEventListener('click', function(){
        count +=1;
        seatLeft -=1;
        setTextElementValueById('seatLeft', seatLeft)
        if(count<=4){
            const seatId= seat.innerText;
            setBackgroundColorById(seatId);

        }
        return
        
    })
}