const endDate='22 Jan  2026 10:PM';

document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input");

//const clock =()=>{


//}

function clock(){
    const end =new Date(endDate);
    const now =new Date();

    //console.log(end,now);

    const diff=(end-now)/1000;
    if(diff<0) return;
    console.log(diff);
    //convert into days
    inputs[0].value=Math.floor(diff/3600/24);
    //convert into hours
    inputs[1].value=Math.floor(diff/3600%24);

    //convert into minutes
    inputs[2].value=(Math.floor(diff/60)%60);

    //convert into seconds 
    inputs[3].value=(Math.floor(diff)%60);






    //convert into days 
    /**
     * 1 day=24 hours ki
     * 1 hours = 60 minutes
     * 60 minus =3600 seconds
     */





}

//initail call =//clock();


setInterval(
    ()=>{
        clock()
    },1000
)
