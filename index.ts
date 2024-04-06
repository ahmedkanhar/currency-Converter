import inquirer from "inquirer";

const currency : any = {
    USD : 1, // base currency
    EUR: 0.88,
    JPY: 114.83,
    GBP: 0.75,
    AUD: 1.32,
    CAD: 1.26,
    CHF: 0.92,
    CNY: 6.37,
    SEK: 8.47,
    NZD: 1.42,
    KRW: 1176.97,
    MXN: 20.17,
    SGD: 1.35,
    HKD: 7.76,
    NOK: 8.61,
    TRY: 13.03,
    INR: 75.32,
    RUB: 75.79,
    BRL: 5.82,
    ZAR: 14.97,
    PKR: 280
};

let userAnswer = await inquirer.prompt([
    {
       name : "from",
       message : "Enter from currency",
       type : "list",
       choices : ["USD", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNY", "SEK", 
       "NZD", "KRW", "MXN", "SGD", "HKD", "NOK", "TRY", "INR", "RUB", 
       "BRL", "ZAR", "PKR"]
    },
    {
        
            name : "to",
            message : "Enter to currency",
            type : "list",
            choices : ["USD", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNY", "SEK", 
            "NZD", "KRW", "MXN", "SGD", "HKD", "NOK", "TRY", "INR", "RUB", 
            "BRL", "ZAR", "PKR"]
         
    },
    {
        name : "amount",
        message : "Enter your amount",
        type : "number"
    }
]);

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount // base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);