
const amount = document.getElementById("amount");
    const interest_rate = document.getElementById("interest_rate");
    const months = document.getElementById("months").value;
    const years= document.getElementById("years");
    const started_date =document.getElementById("started_date");
    const deposit = document.getElementById("deposit");
    const extra_fee =document.getElementById("extra_fee");
const baloon_end = document.getElementById("balloon_end");
const button=document.getElementById("calc")
    
function loancalculator() {
const amountValue=parseInt(amount.value)
const interestValue=parseInt(interest_rate.value)
    const interest = (amountValue * (interestValue/100));
    const loanPayment = ((amountValue) + interest).toFixed(2);
    const depositValue=((amountValue)-interest)
    // document.getElementById("payment").innerHTmml = "monthly Payment=$" + payment;
    console.log(depositValue)
}

button.addEventListener("click", (e) =>{
    loancalculator()
})

