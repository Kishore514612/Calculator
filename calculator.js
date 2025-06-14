let input=""

display=(value)=>{   
    input+=value
    document.getElementById("disp").innerHTML=input;
}

calc=()=>{
    document.getElementById("disp").innerHTML=eval(input)
    input=eval(input).toString();
}

clrall=()=>{
    input="";
    document.getElementById("disp").innerHTML=input;
}

del=()=>{
    input=input.slice(0,-1);
    document.getElementById("disp").innerHTML=input;
}

document.addEventListener("keydown",function(event){
    const key=event.key;

    if((key>='0'&&key<='9')||['+','-','*','/','.'].includes(key))
        display(key);
    else if(key=='Enter')
        calc();
    else if(key=='Backspace')
        del();

});
