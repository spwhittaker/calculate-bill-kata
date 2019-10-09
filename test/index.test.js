

const doubleAndSubtract1 = num => {
    const result = (num * 2) - 1;
    return result ;
}
const calculateBill = function(priceOfItems,vat,tip){
    const integerPriceOfItems = parseInt(priceOfItems);
    const integerVat = parseInt(vat)/100;
    const integerTip = parseInt(tip)/100;


    totalBill = integerPriceOfItems + integerPriceOfItems*integerVat + integerPriceOfItems*integerTip;
    const formattedBill = "£" + totalBill.toFixed(2);
    console.log(formattedBill);
    return formattedBill;
    
};


test('function doubles the number then takes away one', () => {
    expect(doubleAndSubtract1(5)).toBe(9) 
});

test("Meal of £60 with 20% VAT and 10% tip should be 60 + 12 + 6, which is £78", () => {
    expect(calculateBill("60","20","10")).toBe("£78.00")
})
