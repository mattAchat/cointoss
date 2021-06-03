const results = document.querySelector("#results");
const flipBtn = document.querySelector("#toss");
const gif = document.querySelector("#resultGif")

function mattWins() {
  results.textContent =
    "It looks like Matt's in control this time... *Matt smirks*";
    gif.setAttribute("src", "./assets/images/mattwins.gif")
}

function lilWins() {
  results.textContent =
    "It would seem that Lilith is in control this time *Matt stops smirking*";
    gif.setAttribute("src", "./assets/images/lilwins.gif")
}

function flip() {
  let toss = Math.floor(Math.random() * 2 + 1);
  console.log(toss);
  if (toss === 1) {
    return "M";
  } else if (toss === 2) {
    return "L";
  } else {
    console.log("Invalid coin toss result");
  }
}

flipBtn.addEventListener("click", function () {
  let flipRes = flip();
  if (flipRes === "M") {
    mattWins();
    return;
  } else if (flipRes === "L") {
    lilWins();
  } else {
    console.log("Flipped but no matching result");
  }
});
