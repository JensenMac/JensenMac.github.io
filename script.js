/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let randNum = getRandomIntInclusive(1, 20); //start w Rand #
console.log(randNum);
let messageObj = document.querySelector(".message");

let score = 20; // GLOBAL variable (accessible by all functions)
let scoreObj = document.querySelector(".score");
let highscore = 0 
let highscoreObj = document.querySelector(".highscore")

function check() {
    let guess = Number(document.querySelector(".guess").value);

    if (guess === randNum) {
      //alert('win')
     messageObj.textContent = "You win! LET'S GO!!!";
     document.body.style.backgroundImage = "url(https://c.tenor.com/cS5jqwPsXAwAAAAd/high-five-walter-white.gif)"
     document.querySelector(".number").textContent = randNum;
      //highscore//
      if (score > highscore) {
        highscore = score;
        highscoreObj.textContent = highscore
      }
    } else if (guess +1 == randNum || guess +2 == randNum || guess +3 == randNum) {
        //alert('slightly too high!')
       messageObj.textContent = "So close! Your guess is a bit too low!";
        score -= 1;
        scoreObj.textContent = score;
        document.body.style.backgroundImage = "url(https://c.tenor.com/neN_tP5qn4YAAAAd/walter-white-shocked.gif)"
       //Loss//
        if (score <= 0) {
          messageObj.textContent = "You lost... Patrick is upset.";
          document.body.style.backgroundImage = "url(https://c.tenor.com/SyPi04ISpD0AAAAd/patrick-bateman.gif)"
         document.querySelector(".number").textContent = randNum;
        }
    } else if (guess -1 == randNum || guess -2 == randNum || guess -3 == randNum) {
        //alert('slightly too low')
        messageObj.textContent = "So close! Your guess is a bit too high!";
        score -= 1;
        scoreObj.textContent = score;
        document.body.style.backgroundImage = "url(https://c.tenor.com/neN_tP5qn4YAAAAd/walter-white-shocked.gif)"
        //Loss//
        if (score <= 0) {
          messageObj.textContent = "You lost... Patrick is upset.";
          document.body.style.backgroundImage = "url(https://c.tenor.com/SyPi04ISpD0AAAAd/patrick-bateman.gif)"
          document.querySelector(".number").textContent = randNum;
        }
    } else if (guess < randNum) {
        //alert('too low')
        messageObj.textContent = "Your guess is too low. Guess again!";
        score -= 2; //Getting far away from the answer takes more points!
        scoreObj.textContent = score;
        document.body.style.backgroundImage = "url(https://c.tenor.com/do8q_eYrsW4AAAAM/crying-black-guy-meme.gif)"
        //Loss//
        if (score <= 0) {
          messageObj.textContent = "You lost... Patrick is upset.";
          document.body.style.backgroundImage = "url(https://c.tenor.com/SyPi04ISpD0AAAAd/patrick-bateman.gif)"
          document.querySelector(".number").textContent = randNum;
        }
    } else if (guess > randNum) {
        //alert('too high')
        messageObj.textContent = "Your guess is too high. Guess Again!";
        score -= 2; //Getting far away from the answer takes more points!
        scoreObj.textContent = score;
        document.body.style.backgroundImage = "url(https://c.tenor.com/do8q_eYrsW4AAAAM/crying-black-guy-meme.gif)"
        //Loss//
        if (score <= 0) {
          messageObj.textContent = "You lost... Patrick is upset.";
          document.body.style.backgroundImage = "url(https://c.tenor.com/SyPi04ISpD0AAAAd/patrick-bateman.gif)"
          document.querySelector(".number").textContent = randNum;
        }
    } else {
      alert("Code brokey :(")
    }

}

function again() {
  alert("Start over")
  randNum = getRandomIntInclusive(1, 20);
  document.body.style.backgroundColor = "#222"
  document.querySelector(".number").textContent = "?";
  let score = 20
  scoreObj.textContent = "20"
  messageObj.textContent = "Start guessing...";
  document.querySelector(".guess").value = ``
  document.body.style.backgroundImage = "none"
}

//document.querySelector()
