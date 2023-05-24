let a=0,b=0;
let out = "";
let oper=0;


function one(){
    if(oper===0) out="";
    let a_screen = document.querySelector('.screen');
    if(oper===0){a = 1;out += String(a);}
    else {b = 1;out += String(b);}
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}

function two(){
    if(oper===0) out="";
    let a_screen = document.querySelector('.screen');
    if(oper===0){a = 2;out += String(a);}
    else {b = 2;out += String(b);}
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}

function three(){
    if(oper===0) out="";
    let a_screen = document.querySelector('.screen');
    if(oper===0){a = 3;out += String(a);}
    else {b = 3;out += String(b);}
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}

function four(){
    if(oper===0) out="";
    let a_screen = document.querySelector('.screen');
    if(oper===0){a = 4;out += String(a);}
    else {b = 4;out += String(b);}
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}
function five(){
    if(oper===0) out="";
    let a_screen = document.querySelector('.screen');
    if(oper===0){a = 5;out += String(a);}
    else {b = 5;out += String(b);}
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}
function six(){
    if(oper===0) out="";
    let a_screen = document.querySelector('.screen');
    if(oper===0){a = 6;out += String(a);}
    else {b = 6;out += String(b);}
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}
function seven(){
    if(oper===0) out="";
    let a_screen = document.querySelector('.screen');
    if(oper===0){a = 7;out += String(a);}
    else {b = 7;out += String(b);}
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}
function eigh(){
    if(oper===0) out="";
    let a_screen = document.querySelector('.screen');
    if(oper===0){a = 8;out += String(a);}
    else {b = 8;out += String(b);}
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}
function nine(){
    if(oper===0) out="";
    let a_screen = document.querySelector('.screen');
    if(oper===0){a = 9;out += String(a);}
    else {b = 9;out += String(b);}
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}

function multy(){
    oper = 1;
    let a_screen = document.querySelector('.screen');
    out += "*";
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}
function divi(){
    oper = 2;
    let a_screen = document.querySelector('.screen');
    out += "/";
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}
function sum(){
    oper = 3;
    let a_screen = document.querySelector('.screen');
    out += "+";
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}
function diff(){
    oper = 4;
    let a_screen = document.querySelector('.screen');
    out += "-";
    a_screen.innerHTML = `<p class="screen_out">${out}</p>`;
}
function equal(){
    let c;
    if(oper===1) c = a*b;
    if(oper===2) c = a / b;
    if(oper===3) c = a+b;
    if(oper===4) c = a-b;
    oper = 0;
    let a_screen = document.querySelector('.screen');
    a_screen.innerHTML = `<p class="screen_out">${c}</p>`;
}
function cln(){
    oper = 0;
    out = "";
    let a_screen = document.querySelector('.screen');
    a_screen.innerHTML = `<p class="screen_out"></p>`;
}