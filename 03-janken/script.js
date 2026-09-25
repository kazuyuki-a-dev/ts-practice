var Hand;
(function (Hand) {
    Hand["Rock"] = "\u30B0\u30FC";
    Hand["Scissors"] = "\u30C1\u30E7\u30AD";
    Hand["Paper"] = "\u30D1\u30FC";
})(Hand || (Hand = {}));
const handButtons = document.querySelectorAll(".hand-btn");
function getComputerHand() {
    const hands = [Hand.Rock, Hand.Scissors, Hand.Paper];
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
}
function judge(you, cpu) {
    if (you === cpu) {
        return "あいこ";
    }
    if ((you === Hand.Rock && cpu === Hand.Scissors) ||
        (you === Hand.Scissors && cpu === Hand.Paper) ||
        (you === Hand.Paper && cpu === Hand.Rock)) {
        return "あなたの勝ち";
    }
    return "あなたの負け";
}
const result = document.getElementById("result");
handButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const yourHandText = btn.dataset.hand;
        const yourHand = yourHandText;
        const cpuHand = getComputerHand();
        const resultText = judge(yourHand, cpuHand);
        result.textContent = `あなた: ${yourHand} / コンピューター: ${cpuHand} → ${resultText}`;
    });
});
export {};
//# sourceMappingURL=script.js.map