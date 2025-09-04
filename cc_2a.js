// Coding Challenge 2a

//Step 1: Creating/Initializing Variables
const productName = "Soccer Ball" 
const costPerUnit = 12.40
const basePrice = 24.99
const salesTaxRate = 0.075
const fixedMonthlyCosts = 750
let discountRate = 0.10

//Step 2: Calculate Pricing & Profit Metrics
let discountedPrice = basePrice * (1-discountRate)
let finalPriceWithTax = discountedPrice * (1+salesTaxRate)
let profitPerUnit = finalPriceWithTax - costPerUnit
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit)
let isProfitablePerUnit = profitPerUnit > 0

//Step 3 Print to Console
console.log(`Product Name: ${productName}`)
console.log(`Discounted Price: (Before Tax) ${discountedPrice}`)
console.log(`Final Price With Tax: ${profitPerUnit.toFixed(2)}`)
console.log(`Break-even units: ${breakEvenUnits}`)
console.log(`Per-Unit profitability: ${isProfitablePerUnit}`)
