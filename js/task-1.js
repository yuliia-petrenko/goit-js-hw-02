function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalSum = quantity * pricePerDroid;
    if (totalSum <= customerCredits) {
        return `You ordered ${quantity} droids worth ${totalSum} credits!`;
    }
    else {
        return `Insufficient funds!`;
    }
}
console.log(makeTransaction(5, 3000, 23000)) 
console.log(makeTransaction(3, 1000, 15000)); 
console.log(makeTransaction(10, 5000, 8000)); 
console.log(makeTransaction(8, 2000, 10000)); 
console.log(makeTransaction(10, 500, 5000));