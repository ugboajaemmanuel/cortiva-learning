let clientName = "Kelvin"
let projectBudget = 500000
let agencyCommission = 0.15

let commissionAmount = projectBudget * agencyCommission
let agencyProfit = projectBudget - commissionAmount
let projectsummary = `Our new client ${clientName} gave us a work that costs ${projectBudget.toFixed(2)} and our company profit will be ${agencyProfit.toFixed(2)}`

console.log(agencyProfit.toFixed(2))
console.log(projectsummary)