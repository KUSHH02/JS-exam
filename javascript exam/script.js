let res = document.querySelector('.result');
let buttons = document.querySelectorAll('button');
let ch = ['+', '-', '*', '/'];

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let last = res.value[res.value.length - 1];
        let length = res.value.length;
        let newRes = res.value.slice(0, length - 1);
        if (e.target.innerHTML == '%') {
            let num = res.value.match(/[\d\.]+$/);
            if (num) {
                num = parseFloat(num[0]);
                if (!isNaN(num)) {
                    res.value = num; 
                } else {
                    res.value = 'Error'; 
                }
            }
        }
        else if (e.target.innerHTML == '√') {
            let num = res.value.match(/[\d\.]+$/);
            if (num) {
                num = parseFloat(num[0]);
                if (!isNaN(num)) {
                    res.value = Math.sqrt(num);
                } else {
                    res.value = 'Error'; 
                }
            }
        }
        else if (e.target.innerHTML == '=') {
            try {
                res.value = eval(res.value);
            } catch (e) {
                res.value = 'Error';
            }
        }
        else if (ch.includes(last)) {
            if (ch.includes(e.target.innerHTML)) {
                if (last != e.target.innerHTML) {
                    res.value = newRes + e.target.innerHTML;
                }
            } else {
                res.value += e.target.innerHTML;
            }
        }
        else if (e.target.innerHTML == 'c') {
            res.value = '';
        }
        else if (e.target.innerHTML == '←') {
            res.value = newRes;
        }
        else {
            res.value += e.target.innerHTML; 
        }
    });
});
