window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const value = {amount: 200000, years: 30, rate: 7.2};
  const loanAmount = document.getElementById("loan-amount");
  loanAmount.value = value.amount;
  const loanYears = document.getElementById("loan-years");
  loanYears.value = value.years;
  const loanRate = document.getElementById("loan-rate");
  loanRate.value = value.rate;
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  monthlyPayment = (i * p) / (1 - Math.pow((1 + i), -n));
  console.log(monthlyPayment.toFixed(2))
  return (monthlyPayment.toFixed(2));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const paymentUI = document.querySelector('#monthly-payment');
  paymentUI.innerText = monthly;
}

