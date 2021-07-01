
let str = "";
let op = "";
let step = 0;
let previus = "";
let current = "";
const calc = (num) =>{
    if(step === 0){
        if(num === "."){
            if(previus.includes(".")) return;
            if(previus === ""){previus = "0"};
        }
        previus = previus + num;
        str = previus;
        display(str); 
        
    }else{
        if(num === "."){
            if(current.includes(".")) return;
            if(current === ""){ current = "0"; }
        }
        current = current + num;
        str = current;
        display(str);
    }
}
const clearCalc = ()=>{
document.getElementById("disp").innerText = "";
op = "";
step = 0;
str = "";
previus = "";
current = "";
}
const equally = ()=>{  

    if(op === "-"){
        previus = Number(previus) - Number(current);
    }
    if(op === "+"){
        previus = Number(previus) + Number(current);
    }
    if(op === "*"){
        previus = Number(previus) * Number(current);
    }
    if(op === "/"){
        previus = Number(previus) / Number(current);
    }
    str = previus;
    display(previus);
    current = "";
}
const operation = (operation)=>{
    if(step !== 0){

    }
    op = operation;
    step ++;
    str = str + op;
    display(str);
    
}
const display = (str)=>{
    document.getElementById("disp").innerText = str;
}