let first = document.body.firstElementChild.firstElementChild.innerHTML
let second = document.body.firstElementChild.lastElementChild.innerHTML
let third = document.body.firstElementChild.firstElementChild.nextElementSibling.innerHTML
let fourth = document.body.firstElementChild.lastElementChild.previousElementSibling.innerHTML
let fifth = document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML


alert(`${first}, ${second}, ${third}, ${fourth}, ${fifth}`);
