let timeElement = document.getElementById("time")
let dateElement = document.getElementById("date")

function updateClock() {
    const now = new Date()

    const hour = (now.getHours() % 12 || 12).toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    const second = now.getSeconds().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    timeElement.textContent = `${hour}:${minute}:${second} ${ampm}`;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    dateElement.textContent = now.toLocaleDateString(undefined,options);

}

setInterval(updateClock, 1000)

updateClock();