function loadTelegramButton() {
    fetch('/includes/telegram.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("telegram-container").innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", loadTelegramButton);
