
let str1 = "";
let str2 = "";
let operation = "";
let operationCount = 0;
let previus = "";
let current = "";
const calc = (num) =>{
    if(operationCount === 0){
        if(num === "."){
            if(previus.includes(".")) return;
            if(previus === ""){previus = "0"};
        }
        previus = previus + num;
        str1 = previus;
        display(str1); 
        
    }else{
        if(num === "."){
            if(current.includes(".")) return;
            if(current === ""){ current = "0"; }
        }
        current = current + num;
        str2 = current;
        display(str1,str2);
    }
}
const clearCalc = ()=>{
    document.getElementById("disp").innerText = "";
    operation = "";
    operationCount = 0;
    str1 = "";
    str2 = "";
    previus = "";
    current = "";
}
const equally = ()=>{  

    if(operation === "-"){
        previus = Number(previus) - Number(current);
    }
    if(operation === "+"){
        previus = Number(previus) + Number(current);
    }
    if(operation === "×"){
        previus = Number(previus) * Number(current);
    }
    if(operation === "/"){
        previus = Number(previus) / Number(current);
    }
    str1 = previus.toString();
    operation = undefined;
    current = "";
    operationCount = 0;
    display(previus);
}
const mathSimbols = (op)=>{
    if(operationCount !== 0)  return;
    operation = op;
    operationCount ++;
    display(str1);
    
}
const display = (str1, str2)=>{
    str2? document.getElementById("disp").innerText = str1+operation+str2:
    document.getElementById("disp").innerText = operation? str1+operation: str1; 
}
const mouseDown = ()=>{
    document.getElementById("displayId").classList.add("displayBorder");
}
const mouseUp = ()=>{
    document.getElementById("displayId").classList.remove("displayBorder");
}