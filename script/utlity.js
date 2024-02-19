
// function setBgColorByID(elementId){
//     const element= document.getElementById(elementId)
//     element.classList.add('bg-[#1DD100]')
// }


function setInnerTextById(elementId,value ){
    document.getElementById(elementId).innerText = value;
}

function removeAttebutes(elementId){
    const removeAtt= document.getElementById(elementId)
    removeAtt.removeAttribute('disabled')
}
const maxSeats = 4;
function disableRemainingButtons() {
    for (let button of buttons) {
        if (!button.classList.contains('bg-[#1DD100]')) {
            button.setAttribute('disabled', 'true');
        }
    }
}
