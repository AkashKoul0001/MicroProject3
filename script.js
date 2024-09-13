function appendNumber(num) {
    const display = document.getElementById('display');
    if (display.value === '0') {
        display.value = num;
    } else {
        display.value += num;
    }
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
