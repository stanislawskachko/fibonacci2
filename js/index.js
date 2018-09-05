//Код для обчислення в циклі
function getData() {
    let n = +document.getElementById("fibcyc").value;
    if (isNaN(n)) {
        document.getElementById("answercyc").innerHTML = 'Помилка - введіть число';
    } else {
        function fib(n) {
            let answer;
            let a = 1
              , b = 1;
            for (i = 3; i <= n; i++) {
                c = a + b;
                a = b;
                b = c;
            }
            return b;
            return answer;
        }
        document.getElementById("answercyc").innerHTML = 'Число ' + n + ' ряду Фібоначчі рівне ' + fib(n);
    }
}

//Код для обчислення рекурсивно
function getDataRec() {
    let m = +document.getElementById("fibrecurs").value;
    if (isNaN(m)) {
        document.getElementById("answerrec").innerHTML = 'Помилка - введіть число';
    } else {
        function fibrec(m) {
            if (m <= 2) {
                return 1;
            } else {
                return fibrec(m - 2) + fibrec(m - 1);
            }
        }
        document.getElementById("answerrec").innerHTML = 'Число ' + m + ' ряду Фібоначчі рівне ' + fibrec(m);
    }
}
