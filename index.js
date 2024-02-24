function guessNumber() {
    var userNumber = document.getElementById("numberInput").value;
    var randomNumber = Math.floor(Math.random() * 6) + 1;
  
    if (userNumber == randomNumber) {
      document.getElementById("result").innerHTML = "Congratulations! You guessed the number right.";
      document.getElementById("numberImage").src = "images/" + randomNumber + ".jpg";
      document.getElementById("numberImage").style.display = "inline-block";
      document.getElementById("winSound").play();
    } else {
      document.getElementById("result").innerHTML = "Sorry, that's not correct. Try again.";
      document.getElementById("numberImage").src = "images/wrong.jpg";
      document.getElementById("numberImage").style.display = "inline-block";
      document.getElementById("buzSound").play();
    }
  }