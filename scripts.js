
function timeFormat(num){
    if(num<10){
        return  `0${num}` ;
    }else{
        return `${num}`;
    }
}


// Pegando um horário para começar a contar regressivamente 
var count = new Date();
var day = count.getDate();
var hours = count.getHours();
var minutes = count.getMinutes();
var seconds=  count.getSeconds();




const interval = setInterval(() => {


     if(seconds == 0){
         minutes--;
         seconds = 59;
     }else if(minutes ==0){
         hours--;
         minutes = 59;
     }else if(hours == 0){
         days--;
         hours = 23;
     }else{
         seconds--;
     }

     
    document.getElementById('day').innerHTML = `${timeFormat(day)}:`;
    document.getElementById('hours').innerHTML = `${timeFormat(hours)}:`;
    document.getElementById('minutes').innerHTML = `${timeFormat(minutes)}:`;
    document.getElementById('seconds').innerHTML = `${timeFormat(seconds)}`;

}, 1000);