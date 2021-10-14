var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
var operand1=0;
var operator=null;
var operand2=null;

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",calculated);
}

function calculated(){
    var value=this.getAttribute("data-value");
    if(value=="+"){
      operator='+';
      operand1=parseFloat(display.innerText);
      display.innerText="";
    }
    else if(value=="-"){
        operator='-';
        operand1=parseFloat(display.innerText);
        display.innerText="";
    }
    else if(value=="*"){
        operator='*';
        operand1=parseFloat(display.innerText);
        display.innerText="";
    }
    else if(value=="/"){
        operator="/";
        operand1=parseFloat(display.innerText);
        display.innerText="";
    }
    else if (value=="AC"){
        display.innerText="";
        operand1=0;
       operator=null;
       operand2=null;
    }
    else if (value== "="){
        operand2=parseFloat(display.innerText);
        var a='operand1' + ""+operator+" "+ 'operand2';
        console.log(operand2+"  "+operand1);
        display.innerText=eval(a);
    }
    else{
        display.innerText+=value;
    }
}