
let str = "";
let arr = [];
const calc = (num) =>{
    if(num === "."){
        if(str.includes(".")) return;
        if(str === ""){str = "0"};
    }
    str = str + num;
    display([str]);   
}

const clearCalc = ()=>{
    document.getElementById("disp").innerText = "";
    str = "";
    arr= [];
}
const equally = ()=>{  
    console.log(str)
    arr.push(str);
    arr = recEqually(arr);
    if(arr.length > 1){
        for(let i = 0; i< arr.length; i++){
            if(arr[i] === "+" || arr[i] === "-"){
                let value =  equa(arr[i-1],arr[i+1], arr[i]);
                arr.splice(i-1,3, value);
                --i;
            }
        }
    }
    display(arr);
}
const mathSimbols = (operation)=>{
    arr.push(str);
    arr.push(operation);
    str= "";
    display(arr);
    
}
const display = (arr)=>{
    document.getElementById("disp").innerText = arr.join(" "); 
}
const mouseDown = ()=>{
    document.getElementById("displayId").classList.add("displayBorder");
}
const mouseUp = ()=>{
    document.getElementById("displayId").classList.remove("displayBorder");
}


const recEqually = (arr)=>{
    console.log(arr);
    if(arr.includes("×") || arr.includes("/")){
        let index, value;
        if(arr.indexOf("×") !== -1){
            index = arr.indexOf("×");
            value =  equa(arr[index-1],arr[index+1], arr[index]);
            arr.splice(index-1,3, value);
        }
        if(arr.indexOf("/") !== -1){
            index = arr.indexOf("/");
            value =  equa(arr[index-1],arr[index+1], arr[index]);
            arr.splice(index-1,3, value);
        }
    } 
    if(arr.includes("×") || arr.includes("/")){
        recEqually(arr);
    }
    return arr; 
}

const equa = (value1, value2, operation)=>{
    if(operation === "-"){
        return Number(value1) - Number(value2);
    }
    if(operation === "+"){
        return Number(value1) + Number(value2);
    }
    if(operation === "×"){
        return Number(value1) * Number(value2);
    }
    if(operation === "/"){
        return Number(value1) / Number(value2);
    }
}