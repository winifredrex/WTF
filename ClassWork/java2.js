//	1	Create 3 accounts as objects,	Each account should have: name, balance, and currency.

const account1 ={
    name: "John",
    balance: 500,
    currency: "USD"
}
const account2 = {
    name: "Jane",
    balance: 2000,
    currency: "USD"
}

const account3 = {
    name: "Doe",
    balance: 3000,
    currency: "USD"
}

const account4 = {
    name: "Smith",
    balance: 100,
    currency: "USD"
}



//	2	Deposit money into the first account. Add any amount and update the balance.
let deposit = 500;
let updatedbalance = account1.balance += deposit

console.log ( "account balance1 has been updated " + updatedbalance);

//3 Withdraw money from the second account.If the balance is not enough, print "Insufficient funds for withdrawal".
let withdraw = 3000;

if (account2.balance >= withdraw) {
  account2.balance -= withdraw;
  console.log("withdrawal successful, new balance: " + account2.balance);
} else {
  console.log("insufficient funds for withdrawal");
}
//4 Transfer money from the third account to the first account. If the transfer is possible, update both balances.Otherwise, print "Transfer failed".

let transfer = 100;
if(account3.balance >= account1.balance)
{
    console.log("account balance 3 before withdrawal: " + account3.balance);
    account3.balance -= transfer;
    console.log("account balance 3 after withdrawal : " + account3.balance );

    console.log("account balance 1 before deposit: " + account1.balance);
    account1.balance += transfer;
    console.log("account balance 1 after deposit: " + account1.balance);

}else{
    console.log("Transfer failed due to insufficient funds" );
}

//5 Compare balances: Print out which account has the highest balance.Print "Two accounts are equal" if any two balances are the same.

console.log("Account 1 balance is: " + account1.balance); //1100
console.log("Account 2 balance is: " + account2.balance); //2000
console.log("Account 3 balance is: " + account3.balance); // 2900



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

// 6 Account status check If balance > 0 → print "Active" If balance === 0 → print "Empty" If balance < 0 → print "Overdrawn"

if(account1.balance > 0){
    console.log("Account 1 is Active");
}else if(account1.balance == 0){
    console.log("Account 1 is Empty");
}else{
    console.log("Account 1 is Overdrawn");
}

if(account2.balance > 0){
    console.log("Account 2 is Active");
}else if(account2.balance == 0){
    console.log("Account 2 is Empty");
}else{
    console.log("Account 2 is Overdrawn");
}

if(account3.balance > 0){
    console.log("Account 3 is Active");
}else if(account3.balance == 0){
    console.log("Account 3 is Empty");
}else{
    console.log("Account 3 is Overdrawn");
}



//	•	Add a 4th account.Transfer money from the richest account to the poorest account.Show all balances before and after the transfer.

console.log("Account 1 balance is: " + account1.balance); //1100
console.log("Account 2 balance is: " + account2.balance); //2000
console.log("Account 3 balance is: " + account3.balance); // 2900
console.log("Account 4 balance is: " + account4.balance); //100

let richestAccount ;
let poorestAccount;

if(account1.balance > account2.balance){
    if(account1.balance > account3.balance){
        console.log("Account 1 has the highest account");
        console.log("Account 1 balance is: " + account1.balance);
        richestAccount = account1.balance;
        console.log("richest account is with balance: " + richestAccount);
    }
}
if(account2.balance > account1.balance){
    if(account2.balance > account3.balance){
        console.log("Account 2 has the highest account");
        console.log("Account 2 balance is: " + account2.balance);
        richestAccount = account2.balance;
        console.log("richest account is with balance: " + richestAccount);
    }
}
if(account3.balance > account1.balance){
    if(account3.balance > account2.balance){
        console.log("Account 3 has the highest account");
        console.log("Account 3 balance is: " + account3.balance);
        richestAccount = account3.balance;
        console.log("richest account is with balance: " + richestAccount);
    }
}

if (account4.balance > account1.balance){
    if(account4.balance > account2.balance){
        if(account4.balance > account3.balance){
            console.log("Account 4 has the highest account");
            console.log("Account 4 balance is: " + account4.balance);
            richestAccount = account4.balance;
            console.log("richest account is with balance: "+ richestAccount);
        }
    }
}

























// if(account1.balance > account2.balance){
//     console.log("Account 1 has the highest account");
//     console.log("Account 1 balance is: " + account1.balance);
// }
// if(account1.balance > account3.balance){
//     console.log("Account 1 has the highest account");
// }
// if(account2.balance > account3.balance){
//     console.log("Account 2 has the highest account");
// }
// if(account2.balance > account1.balance){
//     console.log("Account 2 has the highest account");
// }
// if(account3.balance > account1.balance){
//     console.log("Account 3 has the highest account");
// }
// if(account3.balance > account2.balance){
//     console.log("account 3 has the highest account");
//     console.log("Account 3 balance is: " + account3.balance);
// }


