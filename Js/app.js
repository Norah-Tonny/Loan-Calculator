const amount = document.getElementById("amount");
const interest_rate = document.getElementById("interest_rate");
const months = document.getElementById("months");
const years = document.getElementById("years");
const extra_ = document.getElementById("extra");
const baloon = document.getElementById("balloon");
const button = document.getElementById("calc");
const payment = document.getElementById("payment");

const estimated = document.getElementById("estimated");
const deposit = document.getElementById("deposit");
const number = document.getElementById("no_Value");
const payoff = document.getElementById("payoff");
const balloon = document.getElementById("balloon_value");
const interest = document.getElementById("interest");
const paid = document.getElementById("paid");
const noPayment = document.getElementById("noPayment");

function loancalculator() {
  const amountValue = parseInt(amount.value);
  const interestValue = parseInt(interest_rate.value);
  const paymentValue = parseInt(payment.value);
  const repaymentMonths = parseInt(years.value) * 12 + parseInt(months.value);
  const totalInterest = amountValue * (interestValue / 100);
  const loanPayment = (amountValue + totalInterest).toFixed(2);
  const deposit = amountValue - interestValue;
  const depositValue = parseInt(deposit.value);
  const payoffValue =(amountValue * parseInt(years.value) + parseInt(months.value));
  const estimatedTotal = amountValue - interestValue / 100;
const estimatedValue=((amountValue)/parseInt(years.value)+parseInt(months.value)-(interestValue))
  console.log(loanPayment);
  paid.innerText = `Ksh. ${loanPayment}`;

  console.log(years.value, months.value);
  payment.innerText = `Ksh. ${loanPayment / repaymentMonths}`;

  console.log(totalInterest);
  interest.innerText = `Ksh. ${totalInterest}`;

  console.log(depositValue);
  deposit.innerText = depositValue;

  console.log(noPayment);
  noPayment.innerText = ` ${repaymentMonths} months`;

    console.log(estimatedValue)
    estimated.innerText = `Ksh. ${amountValue / parseInt(years.value) + parseInt(months.value) - (interestValue)}`;
    
  console.log(payoffValue)
  payoff.innerText=`Ksh.${payoffValue}`
}
button.addEventListener("click", (e) => {
  loancalculator();
});
