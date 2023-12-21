var countDownDate=new Date("oct 19, 2024 00:00:00").getTime();
var x=setInterval(function(){
    var now=new Date().getTime();
    var distance=countDownDate - now;
    var days=Math.floor(distance / (1000 * 60 * 60 * 24));
    var Hours=Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var Minite=Math.floor((distance % (1000*60*60))/(1000*60));
    var Seconds=Math.floor((distance % (1000*60))/1000);

    document.getElementById('day').innerHTML=days;
    document.getElementById('hour').innerHTML=Hours;
    document.getElementById('minite').innerHTML=Minite;
    document.getElementById('second').innerHTML=Seconds;

    if(distance<0){
        clearInterval(x);
        document.getElementById('day').innerHTML="00";
        document.getElementById('hour').innerHTML="00";
        document.getElementById('minite').innerHTML="00";
        document.getElementById('second').innerHTML="00";
    }
},1000);
