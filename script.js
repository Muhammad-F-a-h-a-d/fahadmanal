function countdown() {
    const targetDate = new Date('December 29, 2023 00:00:00').getTime();
    const interval = setInterval(function() {
        const currentDate = new Date().getTime();
        const timeLeft = targetDate - currentDate;

        if (timeLeft <= 0) {
            clearInterval(interval);
            document.getElementById('celebration').classList.remove('hidden');
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById('days').innerHTML = days;
            document.getElementById('hours').innerHTML = hours;
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('seconds').innerHTML = seconds;
        }
    }, 1000);
}

countdown();
