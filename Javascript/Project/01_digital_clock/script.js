function updateClock(){
    const timeElement = document.getElementById('time')
    const dateElement = document.getElementById('date')
    const currentTime = new Date();

    // time
    const hours = currentTime.getHours() % 12 || 12;
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2,'0');
    const am_pm = currentTime.getHours() < 12 ? 'AM': 'PM';

    timeElement.innerText = `${hours}:${minutes}:${seconds} ${am_pm}`

    // date
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const dateString = currentTime.toLocaleDateString(undefined,options)

    dateElement.innerText = `${dateString}`
}

// setInterval(()=>updateClock(),1000);
setInterval(updateClock,1000);

updateClock();