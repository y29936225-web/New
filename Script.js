function predict() {
  const dragon = document.getElementById('dragon').value;
  const tiger = document.getElementById('tiger').value;

  if (!dragon || !tiger) {
    alert("Enter both card numbers!");
    return;
  }

  fetch("https://dragon-tiger-ml.onrender.com/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ dragon: parseInt(dragon), tiger: parseInt(tiger) })
  })
  .then(res => res.json())
  .then(data => {
    const result = document.getElementById('result');
    const sound = document.getElementById("sound");
    result.innerHTML = `<b>Prediction:</b> ${data.winner.toUpperCase()} 🐉🐯`;
    sound.play();
  })
  .catch(err => {
    alert("Error connecting to server.");
  });
}
