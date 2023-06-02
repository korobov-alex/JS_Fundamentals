let body = document.createElement('body');
let main = document.createElement('main');
let div = document.createElement('div');
let p = document.createElement('p');

main.className = "mainClass check item";
div.id = "myDiv";

p.textContent = "First paragraph"

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

document.documentElement.appendChild(body)
