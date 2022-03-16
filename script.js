function add_param(param) {
    document.querySelector("[name ='screen']").value += param;
}

function calc() {
    math_count = document.querySelector("[name ='screen']").value;
    document.querySelector("[name='screen']").value = eval(math_count);
}

function percentage() {
    math_count = document.querySelector("[name = 'screen']").value + '/ 100';
    document.querySelector("[name = 'screen']").value = eval(math_count);
}

function ac_btn() {
    document.querySelector("[name = 'screen']").value = ''
}
