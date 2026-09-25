enum Hand {
  Rock = "グー",
  Scissors = "チョキ",
  Paper = "パー",
}

const handButtons = document.querySelectorAll(".hand-btn");

function getComputerHand(): Hand {
  const hands = [Hand.Rock, Hand.Scissors, Hand.Paper];
  const randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex] as Hand;
}

function judge(you: Hand, cpu: Hand): string {
  if (you === cpu) {
    return "あいこ";
  }

  if (
    (you === Hand.Rock && cpu === Hand.Scissors) ||
    (you === Hand.Scissors && cpu === Hand.Paper) ||
    (you === Hand.Paper && cpu === Hand.Rock)
  ) {
    return "あなたの勝ち";
  }

  return "あなたの負け";
}

const result = document.getElementById("result");

handButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const yourHandText = (btn as HTMLElement).dataset.hand;
    const yourHand = yourHandText as Hand;

    const cpuHand = getComputerHand();
    const resultText = judge(yourHand, cpuHand);

    result!.textContent = `あなた: ${yourHand} / コンピューター: ${cpuHand} → ${resultText}`;
  });
});
