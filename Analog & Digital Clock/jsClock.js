setInterval(()=>{
d=new Date();
hr=d.getHours();
min=d.getMinutes();
sec=d.getSeconds();
hr_rotation=30*hr+min/2;
min_rotation=6*min;
sec_rotation=6*sec;
hour.style.transform=`rotate(${hr_rotation}deg)`;
Minute.style.transform=`rotate(${min_rotation}deg)`;
second.style.transform=`rotate(${sec_rotation}deg)`;
},1000);
setInterval(digitaltime,1000);
function digitaltime(){
    let t=new Date();
    let hr=t.getHours();
    let min=t.getMinutes();
    let sec=t.getSeconds();
    AM_PM="AM";
    if(hr>12){
        hr-=12;
        AM_PM="PM";
    }
    if(hr==00){
        hr=12;
        AM_PM="AM";
    }
    hr=(hr<10)?"0"+hr:hr;
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;
    let curr_time=hr+":"+min +":"+sec+" "+AM_PM;
    document.getElementById("digitalClock").innerHTML=curr_time;
}
digitaltime();