export function priceFormat(price){
  let priceFragArray = price.toString().split('.');
  if(priceFragArray.length == 1){
    price = rightPad(0, 2, priceFragArray[0]);
  } else {
    price = rightPad(priceFragArray[1].length, 2, priceFragArray[0]);
  }
  return price;
}

export function rightPad(currentDigit, totalDigit, intPrice){
  let resultPrice = intPrice + '.';
  for(let i = Number(currentDigit); i < Number(totalDigit); i++){
    resultPrice += '0';
  }
  return resultPrice;
}
