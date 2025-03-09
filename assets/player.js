document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const streamId = urlParams.get("id");

    if (!streamId) {
        document.getElementById("player-container").innerHTML = "<p>Error: No stream ID provided.</p>";
        return;
    }

    try {
        const response = await fetch(`/backend/getStream.php?id=${streamId}`);
        const data = await response.json();

        if (data.error) {
            document.getElementById("player-container").innerHTML = "<p>Error: Invalid stream.</p>";
            return;
        }

        var player = jwplayer("player-container");
        player.setup({
            file: data.url,
            width: "100%",
            stretching: "exactfit",
            type: "hls",
            autostart: "true",
            mute: "false",
            primary: "html5",
            logo: {
                file: "",
                hide: "false",
                position: "top-right",
            }
        });

    } catch (error) {
        console.error("Failed to load stream:", error);
        document.getElementById("player-container").innerHTML = "<p>Error: Could not load stream.</p>";
    }
});
