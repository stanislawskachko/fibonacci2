//Код для обчислення в циклі
function getData() {
    let n = parseInt(document.getElementById("fibcyc").value);
    if (isNaN(n)) {
        document.getElementById("answercyc").innerHTML = 'Помилка - введіть число';
    } else {
        function fibCyc(n) {
            let a = 1, b = 1;
            for (i = 3; i <= n; i++) {
                c = a + b;
                a = b;
                b = c;
            }
            return b;
        }
        document.getElementById("answercyc").innerHTML = 'Число ' + n + ' ряду Фібоначчі рівне ' + fibCyc(n);
    }
}

//Код для обчислення рекурсивно
function getDataRec() {
    let m = parseInt(document.getElementById("fibrecurs").value);
    if (isNaN(m)) {
        document.getElementById("answerrec").innerHTML = 'Помилка - введіть число';
    } else {
        function fibRec(m) {
            if (m <= 2) {
                return 1;
            } else {
                return fibRec(m - 2) + fibRec(m - 1);
            }
        }
        document.getElementById("answerrec").innerHTML = 'Число ' + m + ' ряду Фібоначчі рівне ' + fibRec(m);
    }
}

//Код для обчислення масивом
function getDataMas() {
    let k = parseInt(document.getElementById("fibmas").value);
    if (isNaN(k)) {
        document.getElementById("answermas").innerHTML = 'Помилка - введіть число';
    } else {
        function fibMas(k) {
            let arr = [0, 1];
            for (let i = 2; i <= k + 1; i++) {
                arr.push(arr[i - 2] + arr[i - 1]);
            }
            return arr[k];
        }

        document.getElementById("answermas").innerHTML = 'Число ' + k + ' ряду Фібоначчі рівне ' + fibMas(k);
    }

}
