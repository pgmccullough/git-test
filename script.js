const app = document.getElementById('app');

app.innerText = "Loading...";
app.style.color = "green";

let isOn = true

setInterval(() => {
  if(isOn) {
    app.style.opacity = 0;
    isOn = false;
  } else {
    app.style.opacity = 1;
    isOn = true;
  }
}, 500);
