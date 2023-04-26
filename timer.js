
let countdown = new Date("july 5, 2023 15:37:43").getTime();
console.log(countdown)

const x = setInterval(() => {
    const now = new Date().getTime(); 
    const distance = countdown -now;

    const day = Math.floor(distance/(1000*60*60*24));
    const hour = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const min = Math.floor((distance%(1000*60*60))/(1000*60));
    const sec = Math.floor((distance%(1000*60))/1000);

    document.getElementById("demo").innerHTML=day+ "d " +hour+"h "+min+"m "+sec+"s "
    if(distance<0){
        clearInterval(x);
        document.getElementById("demo").innerHTML="Expired";
    }

}, 1000);