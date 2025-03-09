// Disable right-click and inspect element
document.addEventListener("contextmenu", event => event.preventDefault());
document.addEventListener("keydown", event => {
    if (event.ctrlKey && ['u', 's', 'i', 'j', 'c'].includes(event.key) || event.key === 'F12') {
        event.preventDefault();
    }
});

// Load Advertisements
document.addEventListener("DOMContentLoaded", () => {
    const ads = {
        "ad-side-left": "/shareus-admanager/7167243183/Em8SgE5gNw/side_AD",
        "ad-top": "/shareus-admanager/7167243183/11YbVYDocK/New_Banner_Top",
        "ad-bottom": "/shareus-admanager/7167243183/hQRUAxVCnE/bottom_Banner",
        "ad-large-bottom": "/shareus-admanager/7167243183/YEEC7aQ8Wl/Banner_1",
        "ad-side-right": "/shareus-admanager/7167243183/I1KQpA3UGP/Right_Side_AD"
    };

    Object.keys(ads).forEach(id => {
        document.getElementById(id).innerHTML = `
            <script type="module" src="https://securepubads.shareus.io/scripts/tag/js/gpt.js"></script>
            <div id="shareus-${id}">
                <script>
                    window._shareustag = window._shareustag || {cmd:[]};
                    _shareustag.cmd.push(function() {
                        _shareustag.defineSlot('${ads[id]}', ["Responsive"], 'shareus-${id}');
                    });
                </script>
            </div>
        `;
    });

    // Load Telegram Button
    document.getElementById("telegram-container").innerHTML = `
        <a href="https://telegram.me/live_Cricket_steam" target="_blank" class="telegram-button">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Join Telegram" />
        </a>
    `;
});
