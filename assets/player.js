// Securely fetch M3U8 URL (this should be replaced by a backend call)
async function getStreamUrl() {
    return "https://your-m3u8-url-here"; // Replace dynamically per page
}

document.addEventListener("DOMContentLoaded", async () => {
    const url = await getStreamUrl();
    var player = jwplayer("player-container");
    player.setup({
        file: url,
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
});
