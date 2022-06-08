function input(num) {
    document.textbox.textview.value =
        document.textbox.textview.value + num;
}


function equal() {
    var exp = document.textbox.textview.value;
    if (exp) {
        document.textbox.textview.value = eval(exp);
    }
}

function backspace() {
    var exp = document.textbox.textview.value;
    document.textbox.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}