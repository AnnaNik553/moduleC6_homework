const btnSend = document.querySelector('.send-message');
const btnGeo = document.querySelector('.send-geolocation');
const output = document.getElementById("output");
const wsUri = "wss://echo.websocket.events/.ws";
websocket = new WebSocket(wsUri);

websocket.onmessage = function (evt) {
    if (evt.data !== 'echo.websocket.events sponsored by Lob.com') {
        writeToScreen(
            '<span style="color: blue;">RESPONSE: ' + evt.data + '</span>'
        );
    }
};

function getMessage() {
    return document.getElementById("input").value;
}

function clearInput() {
    document.getElementById("input").value = '';
}

function writeToScreen(message, alignRight = false) {
    let pre = document.createElement("p");
    pre.style.overflowWrap = "break-word";
    if (alignRight) {
        pre.style.alignSelf = "flex-end";
    }
    pre.innerHTML = message;
    output.appendChild(pre);
}

btnSend.addEventListener('click', () => {
    let message = getMessage();
    writeToScreen("SENT: " + message, alignRight = true);
    websocket.send(message);
    clearInput();
});

btnGeo.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            writeToScreen(`<a href = https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude} id="map-link" target="_blank">Гео-локация</a>`, alignRight = true)
        });
    }
})

