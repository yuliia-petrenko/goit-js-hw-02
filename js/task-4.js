function getShippingCost(country) {
    const China = 100;
    const Chile = 250;
    const Australia = 170;
    const Jamaica = 120;
    let price = 0;
    let message = "";
    switch (country) {
        case 'China':
            price = China;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'Chile':
            price = Chile;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'Australia':
            price = Australia;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'Jamaica':
            price = Jamaica;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            message = `Sorry, there is no delivery to your country`
            
    }
    return message;
}
console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden"));