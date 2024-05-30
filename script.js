// script.js
let count = 0;
let button = document.getElementById('tossButton');
let counter = document.getElementById('counter');

setInterval(function() {
    count += 1;
    counter.textContent = count;
}, 1000);

button.addEventListener('click', function() {
    count+= 3;
    counter.textContent = count;
});
