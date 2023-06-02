 // Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.
function priceChange(event, color, price) {
  let currentPrice = document.getElementById("outprice");
  if (currentPrice.innerHTML !== price) {
    currentPrice.innerHTML = price + "$";
  } else {
    currentPrice.innerHTML = currentPrice.innerHTML + "€";
  }
}

//---------------------------------------------------------------
let lastClickedButton = null;
function currencyChange(event, currency) {
  let currentPrice = document.getElementById("outprice");
  let previousPrice = currentPrice.innerHTML;

  if (lastClickedButton === currency) {
    return;
  }

  let price = parseFloat(currentPrice.innerHTML);

  if (currency === "usd") {
    let recalculation = price / 1.07;
    let result = recalculation.toFixed(0);
    currentPrice.innerHTML = result + "$";
  } else {
    let recalculation2 = price * 1.07;
    let result2 = recalculation2.toFixed(0);
    currentPrice.innerHTML = result2 + "€";
  }
  
  lastClickedButton = currency;
}


function usdClickHandler(event) {
  currencyChange(event, 'usd');
}

function euroClickHandler(event) {
  currencyChange(event, 'euro');
}

document.getElementById('usd').addEventListener('click', usdClickHandler);
document.getElementById('euro').addEventListener('click', euroClickHandler);



//---------------------------------------------------------------
let lastClickedButtonSize = null;
function sizeChange(event, size) {
  let currentPrice = document.getElementById("outprice");
  let previousPrice = currentPrice.innerHTML;

  if (lastClickedButtonSize === size) {
    return;
  }

  let price = parseFloat(currentPrice.innerHTML);
  let currentCurrency = document.getElementById("outprice").textContent;
  let currencySymbol = currentCurrency.replace(/[0-9]/g, '');


  if (size === "L") {
    let recalculation = price * 2;
    let result = recalculation.toFixed(0);
    currentPrice.innerHTML = result + currencySymbol;
  } else {
    let recalculation2 = price / 2;
    let result2 = recalculation2.toFixed(0);
    currentPrice.innerHTML = result2 + currencySymbol;
  }
  
  lastClickedButtonSize = size;
}


function lClickHandler(event) {
  currencyChange(event, 'L');
}

function xlClickHandler(event) {
  currencyChange(event, 'XL');
}

document.getElementById('L').addEventListener('click', lClickHandler);
document.getElementById('XL').addEventListener('click', xlClickHandler);
