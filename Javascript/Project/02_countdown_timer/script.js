const startButton = document.getElementById('startButton');
const timeInput = document.getElementById('timeInput');
const countdownDisplay = document.getElementById('countdownDisplay');

function startTimer(time){
    let valueInSeconds = Number(timeInput.value);
    if(valueInSeconds <= 0){
        countdownDisplay.innerText = 'Please enter seconds > 0';
        return
    }
    const timer = setInterval(()=>{
        valueInSeconds--;
        countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`
        if(valueInSeconds <=0 ){
            countdownDisplay.innerText = 'Time up ⏰'
            clearInterval(timer);
        }
    },1 * 1000)
}

startButton.addEventListener('click',startTimer)