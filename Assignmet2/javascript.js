// 1  Create 4 accounts as objects.
// Each should have: name, balance, currency, and type (e.g., "Savings", "Checking").
const account1 ={
    name: "John",
    balance: 500,
    currency: "USD",
    type: "Savings"
}
const account2 = {
    name: "Jane",
    balance: 2000,
    currency: "USD",
    type: "Checking"
}

const account3 = {
    name: "Doe",
    balance: 3000,
    currency: "NGN",
    type: "Savings"
}

const account4 = {
    name: "Smith",
    balance: 100,
    currency: "NGN",
    type: "Checking"
}

const account5 = {
    name: "Alice",
    balance: 1500,
    currency: "EUR",
    type: "Savings"
}


// 2 Simulate deposits:
// Add different deposit amounts to two accounts.
// Show the new balances.
let deposit1 = 400;
let desposit2 = 100;

console.log("Account 1 balance before deposit: " + account1.balance);
account1.balance += deposit1;
console.log("Account 1 balance after deposit: " + account1.balance);

console.log("Account 4 balance before deposit: " + account4.balance);
account4.balance += desposit2;
console.log("Account 4 balance after deposit: " + account4.balance);



// 3  Simulate withdrawals:
// Attempt withdrawals from two accounts.
// If the balance is insufficient, print:
// "Withdrawal denied for <name>: insufficient funds"

let withdraw1 = 700;

if (account2.balance >= withdraw1) {
  account2.balance -= withdraw1;
  console.log("Withdrawal successful for " + account2.name + ", new balance: " + account2.balance);
} else {
  console.log("Withdrawal denied for " + account2.name + ": insufficient funds");
}

if (account4.balance >= withdraw1) {

  console.log("Account 4 balance before withdrawal: " + account4.balance);
  account4.balance -= withdraw1;
  console.log("Withdrawal successful for " + account4.name + ", new balance: " + account4.balance);
} else {
  
  console.log("Withdrawal denied for " + account4.name + ": insufficient funds");
}

// 4 Transfers:
// Transfer money between two accounts only if they have the same currency.
// If currencies are different, print:
// "Transfer failed: currency mismatch"

let transfer = 200;
if(account1.currency == account2.currency){
    console.log("Account 1 balance before transfer: " + account1.balance);
    account1.balance -= transfer;
    console.log("Account 1 balance after transfer: " + account1.balance);

    console.log("Account 2 balance before receiving transfer: " + account2.balance);
    account2.balance += transfer;
    console.log("Account 2 balance after receiving transfer: " + account2.balance);
}else{
    console.log("Transfer failed: currency mismatch between " + account1.name + " and " + account2.name);
}



// 5 Monthly maintenance:
// If account type is "Savings", add interest (e.g., 2% of balance).
// If account type is "Checking", deduct fees (e.g., 50 units).
let interestRate = 0.02;
let deductionFee = 50;

if(account1.type == "Savings"){
    let interest = account1.balance * interestRate;
    account1.balance += interest;
    console.log("Account 1 new balance after interest: " + account1.balance);
}

if(account2.type == "Checking"){
    account2.balance -= deductionFee;
    console.log("Account 2 new balance after fee deduction: " + account2.balance);
}

// Comparisons:
// Print out the account with the highest balance.
// Print out the account with the lowest balance.

if(account1.balance > account2.balance){
    if(account1.balance > account3.balance){
        console.log("Account 1 has the highest account");
        console.log("Account 1 balance is: " + account1.balance);
      
    }
}
if(account2.balance > account1.balance){
    if(account2.balance > account3.balance){
        console.log("Account 2 has the highest account");
        console.log("Account 2 balance is: " + account2.balance);
      
    }
}
if(account3.balance > account1.balance){
    if(account3.balance > account2.balance){
        console.log("Account 3 has the highest account");
        console.log("Account 3 balance is: " + account3.balance);
    
    }
}

if (account4.balance > account1.balance){
    if(account4.balance > account2.balance){
        if(account4.balance > account3.balance){
            console.log("Account 4 has the highest account");
            console.log("Account 4 balance is: " + account4.balance);
        
        }
    }
}

if (account1.balance < account2.balance){
    if(account1.balance < account3.balance){
        if(account1.balance < account4.balance){
            console.log("Account 1 has the lowest account");
            console.log("Account 1 balance is: " + account1.balance);
        
        }
    }
}

if (account2.balance < account1.balance){
    if(account2.balance < account3.balance){
        if(account2.balance < account4.balance){
            console.log("Account 2 has the lowest account");
            console.log("Account 2 balance is: " + account2.balance);
        
        }
    }
}

if (account3.balance < account1.balance){
    if(account3.balance < account2.balance){
        if(account3.balance < account4.balance){
            console.log("Account 3 has the lowest account");
            console.log("Account 3 balance is: " + account3.balance);
        
        }
    }
}

if (account4.balance < account1.balance){
    if(account4.balance < account2.balance){
        if(account4.balance < account3.balance){
            console.log("Account 4 has the lowest account");
            console.log("Account 4 balance is: " + account4.balance);
        
        }
    }
}

// 7 Account status check:
// If balance > 0 → "Active"
// If balance == 0 → "Empty"
// If balance < 0 → "Overdrawn"
let account1Status;
let account2Status;
let account3Status;
let account4Status;
if(account1.balance > 0){
    console.log("Account 1 is Active");
     account1Status = "Active";
}else if(account1.balance == 0){
    console.log("Account 1 is Empty");
    account1Status = "Empty";
}else{
    console.log("Account 1 is Overdrawn");
    account1Status = "Overdrawn";
}

if(account2.balance > 0){
    console.log("Account 2 is Active");
    account2Status = "Active";
}else if(account2.balance == 0){
    console.log("Account 2 is Empty");
    account2Status = "Empty";
}else{
    console.log("Account 2 is Overdrawn");
    account2Status = "Overdrawn";
}

if(account3.balance > 0){
    console.log("Account 3 is Active");
    account3Status = "Active";
}else if(account3.balance == 0){
    console.log("Account 3 is Empty");
    account3Status = "Empty";
}else{
    console.log("Account 3 is Overdrawn");
    account3Status = "Overdrawn";
}

if(account4.balance > 0){
    console.log("Account 4 is Active");
    account4Status = "Active";
}else if(account4.balance == 0){
    console.log("Account 4 is Empty");
    account4Status = "Empty";
}else{
    console.log("Account 4 is Overdrawn");
    account4Status = "Overdrawn";
}   


// 8 Transaction summary:
// After all operations, print all accounts with final balances and statuses in a clean format.
console.log("Final Account Summary:");
console.log("Account 1 - Name: " + account1.name + ", Balance: " + account1.balance + ", Status: " + account1Status);
console.log("Account 2 - Name: " + account2.name + ", Balance: " + account2.balance + ", Status: " + account2Status);
console.log("Account 3 - Name: " + account3.name + ", Balance: " + account3.balance + ", Status: " + account3Status);
console.log("Account 4 - Name: " + account4.name + ", Balance: " + account4.balance + ", Status: " + account4Status);

// 🎯 Bonus Challenge
// Add a foreign currency account (e.g., "EUR").
// Try to transfer from it into a "USD" account and handle the currency mismatch.
// Then, add an exchange rate (e.g., 1 EUR = 1.1 USD) and retry the transfer using conversion.
// Use functions in a clear and simple way. (if advance you loose your marks)


// let transferAmountEUR = 100;
// let exchangeRate = 1.1; // 1 EUR = 1.1 USD
// let convertedAmount = transferAmountEUR * exchangeRate; // Convert EUR to USD

// if(account5.currency != account2.currency){
//     console.log("Transfer failed: currency mismatch between " + account5.name + " and " + account2.name);
//     if(account5.balance >= transferAmountEUR){ // if 1500 EUR >= 100 EUR it means it has eniugh money to transfer
//         account5.balance -= transferAmountEUR; // Deduct 100 EUR from account5 since we are tring to transfer from the account5
//         account2.balance += convertedAmount; // Add 110 USD to account2 (100 EUR * 1.1)
//         console.log("Transfer successful after conversion!"); 
//         console.log("Account 5 new balance: " + account5.balance);
//         console.log("Account 2 new balance: " + account2.balance);
//     }else{
//         console.log("Transfer failed: insufficient funds in " + account5.name + "'s account.");
//     }
// }

function convertCurrency(transferAmountEUR, convertedAmount) {
    if(account5.balance >= transferAmountEUR){ // if 1500 EUR >= 100 EUR it means it has eniugh money to transfer
        console.log("Account balance before deduction of transfer amount"+account5.balance)
        account5.balance -= transferAmountEUR; // Deduct 100 EUR from account5 since we are tring to transfer from the account5
        console.log("Account balance before addidtion of amount"+account2.balance)
        account2.balance += convertedAmount; // Add 110 USD to account2 (100 EUR * 1.1)
        return "Transfer successful after conversion! Account 5 new balance: " + account5.balance + ", Account 2 new balance: " + account2.balance;
    }else{
        return "Transfer failed: insufficient funds in " + account5.name + "'s account.";
    }
}

let result = convertCurrency(100, (100 * 1.1));
console.log (result)



// GOAL: This assignment forces you to use:
// Strings → names, messages, account type.
// Numbers → balances, deposits, interest, fees.
// Objects → multiple accounts.
// If/else & comparisons → conditions for deposits, withdrawals, transfers, and status checks.