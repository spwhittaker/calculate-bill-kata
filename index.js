const calculateBill = function(priceOfItems,vat,tip){
    const integerPriceOfItems = parseInt(priceOfItems);
    const integerVat = parseInt(vat)/100;
    const integerTip = parseInt(tip)/100;


    totalBill = integerPriceOfItems + integerPriceOfItems*integerVat + integerPriceOfItems*integerTip;
    const formattedBill = "£" + totalBill.toFixed(2);
    console.log(formattedBill);
    return formattedBill;
    
};