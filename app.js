let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let ampm = document.getElementById("ampm");

function setClock() {
  let c = new Date();
  let h = c.getHours();
  let m = c.getMinutes();
  let s = c.getSeconds();

  if (h < 12) {
    ampm.innerText = "AM";
  } else {
    h -= 12;
    ampm.innerText = "PM";
  }

  hour.innerText = h < 10 ? "0" + h : h;
  minute.innerText = m < 10 ? "0" + m : m;
  second.innerText = s < 10 ? "0" + s : s;

  setTimeout(setClock, 1000);
}

setClock();
