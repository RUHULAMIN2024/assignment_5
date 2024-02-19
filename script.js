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
const tbody = document.getElementById("tbody");
let count= 0;
for(let seat of seats){
    
    
    seat.addEventListener('click', function(){
        count +=1;


        
        
        if(count<=4){
            
            seatLeft -=1;
            setTextElementValueById('seatLeft', seatLeft)
            const seatId= seat.innerText;
            setBackgroundColorById(seatId);

            setTextElementValueById('selectedSeat', count)

            let tr=document.createElement('tr');
            let td1=document.createElement('td');
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
        return
        
    })
}