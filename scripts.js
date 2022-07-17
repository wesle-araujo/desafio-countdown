
const interval = setInterval(() => {

    const count = new Date()

    const day = count.getDate()+ ':' 
    const hours = count.getHours() + ':' 
    const minutes = count.getMinutes() + ':'
    const seconds=  count.getSeconds();

    document.getElementById('day').innerHTML = day;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}, 1000);