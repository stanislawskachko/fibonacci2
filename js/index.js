let n=document.getElementById("fibcyc");

//Код для обчислення в циклі
function fib(n) {
    let a = 1,
        b = 1;
    for (i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

document.getElementById("answercyc").innerHTML = 'Число ' + n + ' ряду Фібоначчі рівне ' + fib(n);





//Код для обчислення в масиві

let k=10;
function fib(k) {
    let a = 1,
        b = 1;
    for (i = 3; i <= k; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

document.getElementById("answermas").innerHTML = 'Число ' + k + ' ряду Фібоначчі рівне ' + fib(k);



//Код для обчислення рекурсивно
let m=20;

function fib(m) {
    let a = 1,
        b = 1;
    for (i = 3; i <= m; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function fibonacci(m) {
   if (m < 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}


document.getElementById("answerrec").innerHTML = 'Число ' + m + ' ряду Фібоначчі рівне ' + fib(m);