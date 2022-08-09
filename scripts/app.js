/* Capturamos todos los inputs, botones y elementos a mostrar los calculos
   We capture all inputs, buttons and elements to display the calculations.
*/

// Inputs
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const personInput = document.getElementById("people");

// tips buttons
const tipButtons = document.querySelectorAll(".tip-btn");

//Show calculos
const tipPerson = document.querySelector(".amount");
const totalPerson = document.querySelector(".total");

// Error msj
const error = document.querySelector(".error");
const inputError = document.querySelector(".input--person");

// Reset btn
const resetBtn = document.querySelector(".reset-btn");

// Variables para almacenar los calculos - Variables for storing calculations
let tip = 0;
let bill = 0;
let person = 0;
let tipAmountC = 0;
let total = 0;

//Funciones de calculo - computed functions

const tipAmount = (bill, tip = 0, person = 0) => {
  if (person != 0) return ((bill * (tip / 100)) / person).toFixed(2);
  if (isNaN(bill)) return "0.00";
  return bill.toFixed(2);
};

const totalAmount = (bill, tipAmount, person) => {
  if (isNaN(bill)) return "0.00";
  if (person != 0) return ((bill + tipAmount * person) / person).toFixed(2);
  return "0.00";
};

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Quitamos las clases primero - Remove the classes first
    tipButtons.forEach((b) => b.classList.remove("selected"));
    //añadimos la clase - add the class
    button.classList.add("selected");
    tip = Number(button.innerHTML);

    // Calculos - calculations
    bill = Number(billInput.value);
    person = Number(personInput.value);

    /* si se ingreso la factura, el tip pero no la persona, se indica el error. 
    Caso contrario, hacemos los calculos y los mostramos en los lugares correspondientes 

    if the bill, the tip but not the person is entered, the error is indicated. 
    Otherwise, we make the calculations and show them in the corresponding places.*/

    if (bill != 0 && person == 0) {
      error.innerHTML = "Can't be zero";
      inputError.classList.add("input--error");
    } else {
      tipAmountC = tipAmount(bill, tip, person);
      total = totalAmount(bill, tipAmountC, person);
      tipPerson.innerHTML = tipAmountC;
      totalPerson.innerHTML = total;
    }
  });
});

tipInput.addEventListener("click", () => {
  /* Si hemos seleccionado unos de los tips 'definidos' y le damos al custom, 
  quitamos la clase selected y reiniciamos el tip a 0

  if we have selected one of the 'defined' tips and we have a custom tip, 
  we remove the selected class and reset the tip to 0*/

  tipButtons.forEach((button) => button.classList.remove("selected"));
  tip = 0;
});

billInput.addEventListener("keyup", () => {
  bill = Number(billInput.value);
  /* Validamos que no se haya ingresado un tip custom.
     Validate that no custom tip has been entered.
  */
  if (Number(tipInput.value) != 0) tip = tipInput.value;
  person = Number(personInput.value);

  /*Si no se han ingresado el número de personas, pero si el tip y el bill, 
  se indica el error, caso contrario se hace el calculo

  If the number of persons has not been entered, but the tip and bill have been entered, 
  the error is indicated, otherwise the calculation is made.
  */
  if (person == 0 && tip != 0 && bill != 0) {
    error.innerHTML = "Can't be zero";
    inputError.classList.add("input--error");
  } else {
    tipAmountC = tipAmount(bill, tip, person);
    total = totalAmount(bill, tipAmountC, person);

    tipPerson.innerHTML = tipAmountC;
    totalPerson.innerHTML = total;
  }
});

tipInput.addEventListener("keyup", () => {
  bill = Number(billInput.value);
  tip = Number(tipInput.value);
  person = Number(personInput.value);

  /*si el bill es diferente de  0 y no es NaN y no se ha ingresado el número de personas, 
  marcamos el error. Caso contrario, hacemos los calculos y los mostramos en el lugar correspondiente

  if the bill is different from 0 and it is not NaN and the number of persons has not been entered, 
  we mark the error. Otherwise, we do the calculations and display them in the corresponding place.
  */
  if (bill != 0 && !isNaN(bill) && person == 0) {
    error.innerHTML = "Can't be zero";
    inputError.classList.add("input--error");
  } else {
    tipAmountC = tipAmount(bill, tip, person);
    total = totalAmount(bill, tipAmountC, person);

    tipPerson.innerHTML = tipAmountC;
    totalPerson.innerHTML = total;
  }
});

personInput.addEventListener("keyup", () => {
  bill = Number(billInput.value);
  /*Validamos que no se haya seleccionado un tip 'definido'
    Validate that a 'defined' tip has not been selected
  */
  if (Number(tipInput.value != 0)) tip = tipInput.value;
  person = Number(personInput.value);

  /*Si ya se han ingresado los valores de bill y tip y se marco el error 'can't be zero', 
  lo borramos y quitamos la clase de error.

  If the bill and tip values have already been entered and the error 'can't be zero' 
  is displayed, we delete it and remove the error class.
  */
  if (error.innerHTML != "") {
    error.innerHTML = "";
    inputError.classList.remove("input--error");
  }

  tipAmountC = tipAmount(bill, tip, person);
  total = totalAmount(bill, tipAmountC, person);

  tipPerson.innerHTML = tipAmountC;
  totalPerson.innerHTML = total;
});

/* Reiniciamos todos los campos correspondientes y quitamos clases de ser necesario
   Reset all the corresponding fields and remove classes if necessary.
*/
resetBtn.addEventListener("click", () => {
  billInput.value = "";
  tipInput.value = "";
  personInput.value = "";
  tipButtons.forEach((button) => button.classList.remove("selected"));
  inputError.classList.remove("input--error");
  tipPerson.innerHTML = "0.00";
  totalPerson.innerHTML = "0.00";
});
