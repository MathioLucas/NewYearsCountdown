const targetDate = new Date('2025-01-01T00:00:00');

function updateTimeDifference() {
    const d = new Date();  
    console.log(d.toLocaleString());
    const timeDifference = targetDate - d;
    const timeDifferenceS = timeDifference / 1000;
    const timeDifferencem = timeDifferenceS / 60;
    const timeDifferenceh = timeDifferencem / 60;
    const timeDifferenced = timeDifferenceh / 24;
    const days = Math.floor(timeDifferenced);
    const hours = Math.floor(timeDifferenceh) % 24;
    const minutes = Math.floor(timeDifferencem) % 60;
    const seconds = Math.floor(timeDifferenceS) % 60;
    document.getElementById('timer').innerHTML = `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

updateTimeDifference();


const interval = setInterval(updateTimeDifference, 1000);
