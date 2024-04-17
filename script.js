const app = document.getElementById('app');

app.innerText = "Loading...";
app.style.color = "green";

setInterval(() => {
  if(app.style.opacity !== 1) {
    app.style.opacity = 0;
  } else {
    app.style.opacity = 1;
  }
}, 500);
