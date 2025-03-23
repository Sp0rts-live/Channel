document.addEventListener("DOMContentLoaded", () => {
    const playerContainer = document.getElementById("player-container");

    // 🔒 Securely store Base64-encoded M3U8 links
    const streamMap = {
        "1": "aHR0cHM6Ly92MTh0YXRhcGxheXN5bmRpY2F0aW9uLmFrYW1haXplZC5uZXQvYnBrLXR2L1Nwb3J0czE4XzFfSERfdm9vdF9NT0Ivb3V0cHV0MDMvaW5kZXgubTN1OD9oZG5lYT1leHA9MTc0Mjc0NzM3NH5hY2w9Lyp+aG1hYz05NWEwMTI5OTllZjVlZTM5YjQwNDcxMjVkYjc2ZTgwNWFmMGIyNTM4MTRmNDhhMmRlMWUwNGMxYjUzMjU1Y2Ex",  // Encoded Stream 1
        "2": "aHR0cHM6Ly9hbGxpbm9uZXJlYm9ybi5jb20vc3Rhci5tM3U4P2lkPTIxMzA0OQ==",  // Encoded Stream 2
        "3": "aHR0cHM6Ly9hbGxpbm9uZXJlYm9ybi5jb20vdGF0YS10djQwLnBocD9pZD0xMTY3Mg=="   // Encoded Stream 3
        "4": "aHR0cDovL2F0MDM0LmNoZWtjZG4ubWUvZ2hMczJ6ZFpTbkZ2VFQwMDAwNDQ3ZDNhMzY1ZDljNzYyMjJjODFhOWZiNzY2MDQ1OWU2YWRlNjg2ZWVlOTBlMjk1YjYwNzBmZDAxNi9pbmRleC5tM3U4P3Rva2VuPWE1ZGM2MzRhODhmM2ZlZDcyMTNiMDZjOWQzNjE2ZDA4"
    };

    // 🔍 Get stream ID from URL (e.g., player.html?stream=2)
    const urlParams = new URLSearchParams(window.location.search);
    const streamId = urlParams.get("stream");

    // 🎥 Decode and load the corresponding stream
    if (streamId && streamMap[streamId]) {
        const decodedURL = atob(streamMap[streamId]); // Decode Base64

        jwplayer("player-container").setup({
            file: decodedURL,  // Use decoded URL
            width: "100%",
            height: "500px",
            stretching: "exactfit",
            type: "hls",
            autostart: true,
            mute: false,
        });
    } else {
        playerContainer.innerHTML = "<h3>Invalid Stream ID!</h3>";
    }
});
