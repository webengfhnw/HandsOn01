var input = document.querySelector('#input');
var output = document.querySelector('#output');

input.addEventListener('keyup',function () {
    var newValue = input.value;
    output.textContent = "Value " + newValue;
});

console.log("hello");