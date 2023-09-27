let user;
let cpu;
let winCpu = 1;
let winUser = 1;
const action=["سنگ","قیجی","کاغذ"];
let imgs = ["../imgs/paper.PNG","../imgs/rock1.PNG","../imgs/sieser.PNG"];
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".show-modal");
function start(userClick){
    
   
    let randomCpu = Math.floor(Math.random() * action.length);
    document.querySelector(".show-cpu").innerHTML = action[randomCpu];
    document.querySelector(".show-user").innerHTML = action[userClick];
  
//    document.querySelector(".userWin").innerHTML = `برد کاربر : ${winUser}`;
  
   if(userClick === randomCpu) return "equal";
   if(userClick === 0 && randomCpu === 1 ||
    userClick === 1 && randomCpu === 2 ||
    userClick === 2 && randomCpu === 0
    ){ 
       return addWinUser(); 
    }
 if(userClick === 1 && randomCpu === 0 ||
        userClick === 2 && randomCpu === 1 ||
        userClick === 0 && randomCpu === 2){
          return  addWinCpu();   
        }

       
}
function addWinCpu(){
    document.querySelector(".cpuWin").innerHTML = `برد کامپیوتر : ${winCpu}`;
    winCpu++;
   backdrop.classList.remove("hideen");
   modal.classList.remove("hideen");
   modal.textContent = `کامپیوتر برد`;
    return winCpu;
}
function addWinUser(){
    
   document.querySelector(".userWin").innerHTML = `برد کاربر : ${winUser}`;
    winUser++;
    backdrop.classList.remove("hideen");
    modal.classList.remove("hideen");
    modal.textContent = `کاربر برد`;
    return winUser;
}

backdrop.addEventListener("click",()=>{
    backdrop.classList.add("hideen");
    modal.classList.add("hideen");
});
setTimeout(()=>{
    backdrop.classList.add("hideen");
    modal.classList.add("hideen");
},10000)