const capital = document.getElementById("capital");
const years = document.getElementById("years");
const interest = document.getElementById("interest");
const isCompound = document.getElementById("compound");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", function (e) {
  const principal = Number(capital.value);
  const time = Number(years.value);
  const rate = Number(interest.value);
  const isCompoundValue = isCompound.checked;

  let amount = 0;
  if (isCompoundValue) {
    // Compound Interest Formula:
    amount = principal + (principal * rate * time) / 100;
  } else {
    amount = principal * (1 + rate / 100) ** time;
  }

  amount = amount.toFixed(2);
  result.textContent = `Final Amount -> ${amount}`;
});
