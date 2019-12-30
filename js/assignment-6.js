//Validate miles are numeric
function mileage(){
  //Mileage input
  var miles = document.getElementById('miles').value;

  //Determine if input numeric
  if(isNaN(miles)){
    alert('Both entries must be numeric');
  }else{
    return false;
  }
}
//Add event listener for non-numeric characters
var elMiles = document.getElementById('miles');
elMiles.addEventListener('blur', mileage, false);


//Validate gas is numeric
function usage(){
  //Gas input
  var gas = document.getElementById('gas').value;

  //Determine if input numeric
  if(isNaN(gas)){
    alert('Both entries must be numeric');
  }else{
    return false;
  }
}
//Add event listener for non-numeric characters
var elGas = document.getElementById('gas');
elGas.addEventListener('blur', usage, false);

//MPG CALCULATION
function calculate(){
  //Declare variables
  var miles = document.getElementById('miles').value;
  var gas = document.getElementById('gas').value;
  var mpg = (miles / gas).toFixed(1);

    //Alert if any inputs are not numbers
    if(isNaN(mpg)){
      alert('Both entries must be numeric');
    }else{
      document.getElementById('mpg').setAttribute('value', mpg);
  }
}
