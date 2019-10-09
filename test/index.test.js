import { exportAllDeclaration } from "@babel/types";

const doubleAndSubtract1 = function(num) {
    num = (num * 2) - 1;
    return num ;
}


test('function doubles the number then takes away one', () => {
    exportAllDeclaration(doubleAndSubtract1(5)).toBe(9) 
})


