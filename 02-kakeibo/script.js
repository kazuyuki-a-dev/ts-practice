let expenses = [
    { amount: 500, category: "食費", memo: "コンビニ" },
    { amount: 1200, category: "交通費", memo: "電車代" },
];
const expenseList = document.getElementById("expenseList");
const totalText = document.getElementById("totalText");
const amountInput = document.getElementById("amountInput");
const categorySelect = document.getElementById("categorySelect");
const memoInput = document.getElementById("memoInput");
const addBtn = document.getElementById("addBtn");
function renderExpenses() {
    expenseList.innerHTML = "";
    for (const expense of expenses) {
        const li = document.createElement("li");
        li.textContent = `${expense.category}: ${expense.amount}円 (${expense.memo})`;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "削除";
        deleteBtn.addEventListener("click", function () {
            expenses = expenses.filter(function (e) {
                return e !== expense;
            });
            renderExpenses();
        });
        li.appendChild(deleteBtn);
        expenseList.appendChild(li);
    }
    const total = expenses.reduce(function (sum, expense) {
        return sum + expense.amount;
    }, 0);
    totalText.textContent = `合計: ${total}円`;
}
renderExpenses();
addBtn.addEventListener("click", function () {
    const newExpense = {
        amount: Number(amountInput.value),
        category: categorySelect.value,
        memo: memoInput.value,
    };
    expenses.push(newExpense);
    renderExpenses();
    amountInput.value = "";
    memoInput.value = "";
});
export {};
//# sourceMappingURL=script.js.map