const deg = 6;
const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hrs.style.transform = `rotate(${hh + mm / 12}deg)`;
  min.style.transform = `rotate(${mm}deg)`;
  sec.style.transform = `rotate(${ss}deg)`;
});

const toggleBtn = document.querySelector("#dark-mode");
const bodyEl = document.querySelector("body");

toggleBtn.checked = true;
console.log(toggleBtn.checked);

updateBody();

function updateBody() {
  if (toggleBtn.checked) {
    bodyEl.classList.remove("light");
  } else {
    bodyEl.classList.add("light");
  }
}

toggleBtn.addEventListener("input", () => {
  updateBody();
});
