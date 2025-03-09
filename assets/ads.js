function loadAds() {
    fetch('/includes/ads.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("ad-top").innerHTML = data;
            document.getElementById("ad-bottom").innerHTML = data;
            document.getElementById("ad-side-left").innerHTML = data;
            document.getElementById("ad-side-right").innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", loadAds);
