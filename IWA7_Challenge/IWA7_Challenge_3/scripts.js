const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat('R' + leoBalance + sarahBalance) //parseInt function converts string into number. String `"9394"` becomes integer value `-9394`. ParseFloat to nearest integer
const leo = `${leoName} ${leoSurname}  (Owed: R${leoBalance})`

const sarah = `${leoName} ${sarahSurname} (Owed:R${sarahBalance})`

const total = "Total amount owed:"
const result = leo + sarah + divider + divider + total + owed + divider

console.log(divider)
console.log(result)