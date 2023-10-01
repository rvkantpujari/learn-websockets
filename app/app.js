const socket = new WebSocket("ws://localhost:3000");

function sendMessage(e) {
    e.preventDefault();
    const msg = document.querySelector("#msgbox");
    if (msg.value) {
        socket.send(msg.value);
        msg.value = "";
    }
    msg.focus();
}

document.querySelector("form").addEventListener("submit", sendMessage);

// Listen for messages
socket.addEventListener("message", ({ data }) => {
    const li = document.createElement("li");
    li.textContent = data;
    document.querySelector("#messages").appendChild(li);
});
