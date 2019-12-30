//SUBTOTAL CHECK
function checkSubtotal(){
  var bill = document.getElementById('bill');
  var elMsg = document.getElementById('checkBill');

  if(bill.value > 999){
    elMsg.textContent = "Please enter a positive number that is less than 1000"
  }else{
    elMsg.textContent = "";
  }
}

var elBill = document.getElementById('bill');
elBill.onblur = checkSubtotal;

//TAX RATE CHECK
function checkTaxrate(){
  var rate = document.getElementById('rate');
  var elMsg = document.getElementById('checkRate');

  if(rate.value > 24){
    elMsg.textContent = "Please enter a positive number that is less than 25"
  }else{
    elMsg.textContent = "";
  }
}

var elRate = document.getElementById('rate');
elRate.onblur = checkTaxrate;

//TOTAL BILL CALCULATION
function calculate(){
  var bill = document.getElementById('bill').value;
  var rate = document.getElementById('rate').value;
  var tax = bill * (rate / 100);
  var total = (+bill + +tax);

  document.getElementById('salesTax').setAttribute('value', '$ ' + tax);
  document.getElementById('total').setAttribute('value', '$ ' + total);
}
