const myButton = document.getElementById('btn-1');

const myButton2 = document.querySelector('.btn');

const allButtons = document.querySelectorAll('.btn');


console.log('myButton');
console.log('allButtons');

myButton.addEventListener('click', function(event) {
alert('I clicked the button');
});