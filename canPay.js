function canPay(changeArray, totalDue) {
    let sum = 0;

    for (let i = 0; i < changeArray.length; i++) {
        const index = i;
        const elements = changeArray[i];
        sum = sum + elements;
       
    }
    if (sum >= totalDue) {
      return true;
    }
    else {
        return false;
    }
  
}
const totalDue = 10;
let myPay = [1,5,5];
const ability = canPay(myPay , totalDue);
console.log(ability)