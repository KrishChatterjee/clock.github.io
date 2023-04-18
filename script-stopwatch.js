let e1=document.getElementById('start-btn');
let e2=document.getElementById('stop-btn');
let e3=document.getElementById("stopwatch")
let e4=document.getElementById("reset-btn")

  


let clr;
let mili=0
let sec=0
let min=0

e1.onclick=()=>{
  clr=setInterval(()=>{
    mili=mili+1;
    if(mili>=100){
      mili=0;
      sec=sec+1;
      if(sec>=60){
        sec=0
        min=min+1
      }
    }
    e3.innerHTML=min+' : '+sec+' : '+mili;
    
  },10)
}

e2.onclick=()=>{
  clearInterval(clr)
}

e4.onclick=()=>{
  mili=0
  sec=0
  min=0
  e3.innerHTML=min+' : '+sec+' : '+mili;
}