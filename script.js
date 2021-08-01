function myForm() {
    let str1 = document.getElementById('form1').value;
    //document.getElementById('output1').innerText = test1(str1);
    document.getElementById('form2').value = test1(str1);
}
function test1(string) {
    let base = btoa(string);
    return base;
}
function myForm2() {
    let str2 = document.getElementById('form2').value;
    //document.getElementById('output2').innerText = test2(str2);
    document.getElementById('form1').value = test2(str2);
}

function test2(string) {
    let base = atob(string);
    return base;
}