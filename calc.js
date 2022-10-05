const keys = document.querySelectorAll("button") 
const result = document.getElementById("result")
const del = document.getElementById("delete") 
const reset = document.getElementById("clearAll") 
const equals = document.getElementById("equals") 
const sym = document.querySelectorAll(".operation") 
let char = [];

 function sendRes(sum){
  result.innerHTML=  sum
 }

keys.forEach((btn) => {
   
    btn.addEventListener('click', () => {
        
        if (btn.className == 'special' || btn.className == 'operation') {
        console.log('this is a special')
        }
        else{
           
            char.push(btn.innerHTML)
            sendRes(char.join(''))
            
        }
    })
})

del.addEventListener('click', () => {
    if (char.length == 1) {
        console.log('empty')
sendRes(0)
    } else {
        char.pop();
        sendRes(char.join(''))
        console.log(char);
    
    }
   
})

reset.addEventListener('click' ,()=>{
    char = [];
    sendRes(0)
    console.log('cleared')
    
})

equals.addEventListener('click', () => {
    let res = parseInt(char.join(''))
    sendRes(res)
    console.log(typeof(res))
})