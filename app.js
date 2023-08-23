const cardHolder = document.querySelector("#cardName");
const cardHolderPrintOut = document.querySelector("#cardNamePrintOut");
const cardInput = document.querySelector("#cardNumber");
const cardOutput = document.querySelector("#cardNumberPrintOut");
const expiryDateMonth = document.querySelector("#expiryMonth");
const expiryDateYear = document.querySelector("#expiryYear");
const expiryOutput = document.querySelector("#expiryPrintOut");
const cvvInput = document.querySelector("#cvvInput");
const cvvOutPut = document.querySelector("#cvvPrintOut");
const button = document.querySelector("#confirmButton")
const nameAndExpiry1 = document.querySelector("#nameAndExpiry")
let month = "";
let year = "";
let storedCards = []

let inputValue = 0;

cardInput.addEventListener("input", function (e) {
  inputValue = e.target.value.replace(/\s/g, ""); // Remove existing spaces
  const formattedValue = formatCreditCardNumber(inputValue);
  e.target.value = formattedValue;
  textplacement()
});

function formatCreditCardNumber(value) {
  const regex = /(\d{4})(?=\d)/g;
  return value.replace(regex, "$1 ");
}

cardHolder.addEventListener("input", function () {
  cardHolderPrintOut.innerText = cardHolder.value;
});

cardInput.addEventListener("input", function () {
  cardOutput.innerText = cardInput.value;
});

expiryDateMonth.addEventListener("input", function () {
  month = expiryDateMonth.value;
  expiryOutput.innerText = `${month}${year}`;
});

expiryDateYear.addEventListener("input", function () {
  year = expiryDateYear.value;
  expiryOutput.innerText = `${month}/${year}`;
});

cvvInput.addEventListener("input", function () {
  cvvOutPut.innerText = cvvInput.value;
});

button.addEventListener("click", function(e) {
    storedCards.push(new StoreCard(cardHolder.value.toUpperCase(), inputValue, `${expiryDateMonth.value}/${expiryDateYear.value}`, cvvInput.value))
})


function StoreCard(name, cardNumber, expiry, cvv){
    this.name = name || ''
    this.cardNumber = cardNumber || undefined
    this.expiry = expiry || ''
    this.cvv = cvv || undefined
}

let card1 = new StoreCard("Ahmad Douqa", 123412312412334, "12/25", "018") 

function textplacement() {
  if(cardInput.value=="") {
    nameAndExpiry1.style.marginTop = "125px"
  } else {
    nameAndExpiry1.style.marginTop = "25.5px"
  }
}