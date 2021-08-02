const header = 'Comming soon...';

let len = 0;
let text = document.getElementById('text');
let check = false

setInterval(() => {
    if (len >= header.length) return
    text.innerHTML += header[len];
    len++;
}, 140)


