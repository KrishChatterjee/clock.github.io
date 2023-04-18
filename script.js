let e1=document.getElementById('sec-hand')
let e2=document.getElementById('min-hand')
let e3=document.getElementById('hr-hand')
let e4=document.getElementById("time")

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


let mydate=new Date();
let hr=mydate.getHours()
let min=mydate.getMinutes();
let sec=mydate.getSeconds();
let time;
let date;

let sec_deg=sec*6;
let min_deg=min *6;
let hr_deg=(hr*30)+(min*0.5);

e1.style.transform=`rotate(${sec_deg}deg)`;
e2.style.transform=`rotate(${min_deg}deg)`;
e3.style.transform=`rotate(${hr_deg}deg)`;

const func=()=>{
  mydate=new Date();
  hr=mydate.getHours()
  min=mydate.getMinutes();
  sec=mydate.getSeconds();
  
  time=' '+hr+':'+ min +':'+sec;
  date=mydate.toLocaleDateString(undefined, options);
  e4.innerHTML= time +" on "+ date;
  
  sec_deg=sec_deg+6;
  e1.style.transform=`rotate(${sec_deg}deg)`;
  if(sec_deg>=360){
    sec_deg=0;
    min_deg=min_deg+6; 
    e2.style.transform=`rotate(${min_deg}deg)`;
    if(min_deg%12==0){
      hr_deg=hr_deg+1      
      e3.style.transform=`rotate(${hr_deg}deg)`; 
     }
  }
}

clr=setInterval(func,1000);






