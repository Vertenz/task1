    document.addEventListener("DOMContentLoaded", () => {
    const dayBlock = document.getElementById('day');
    const hourBlock = document.getElementById('hour');
    const minuteBlock = document.getElementById('minutes');
    const secondBlock = document.getElementById('second');
    const yearEl = document.getElementById('year');

    let time = null;

    let dayEnd = new Date();
    yearEl.innerHTML = dayEnd.getFullYear()
    dayEnd = +dayEnd + 8.64e7;
    if (time === null) {
        setInterval(() => {
            time = new Date();
            const timeDifference = dayEnd - time;
            let dayLeft = timeDifference / 8.64e7;
            dayLeft = Math.floor(dayLeft);
            let hourLeft = timeDifference / 3.6e6 % 24;
            hourLeft = Math.floor(hourLeft);
            let minutesLeft = timeDifference / 60000 % 60;
            minutesLeft = Math.floor(minutesLeft);
            let secondLeft = timeDifference / 1000 % 60;
            secondLeft = Math.floor(secondLeft)
            dayBlock.innerHTML = dayLeft;
            hourBlock.innerHTML = hourLeft;
            minuteBlock.innerHTML = minutesLeft;
            secondBlock.innerHTML = secondLeft;
        }, 1000)
    }else {
        //TD только сек и мин
    }
});
