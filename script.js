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

button.addEventListener('click', function() {
    let newName = prompt("Enter new name (max 14 characters):");
    if (newName.length > 14) {
        alert("Name should be maximum 14 characters long.");
    } else {
        document.getElementById('name-id').textContent = newName;
        let telegramName = newName.slice(0, 14);
        let icon = document.getElementById('id-icon');
        icon.src = "https://api.telegram.org/bot<7139342564:AAGQuBN8GuTTQMYHS3RjRdd6z2WSAv86tqI>/getUserProfilePhotos?user_id=<USER_ID>&photo_file_id=<PHOTO_FILE_ID>";
    }
});
