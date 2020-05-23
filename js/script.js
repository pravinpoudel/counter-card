const today = new Date();
const start = new Date(2020, 2, 24);
const oneday = 24*60*60*1000;

let totaldays = Math.ceil((today-start)/oneday);
document.getElementById("days").innerHTML = totaldays;

var diff = (today-start);

console.log(diff);
console.log(today);
console.log(start)