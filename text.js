const header = 'Comming soon...';

let len = 0;
let text = document.getElementById('text');
let check = false

setInterval(() => {
    if (len >= header.length) return

    text.innerText += header[len];
    len++;
}, 140)

setInterval(() => {
    check = !check
    text.innerText = check ? header.substr(0, len-1) : header.substr(0, len)
}, 1000)
