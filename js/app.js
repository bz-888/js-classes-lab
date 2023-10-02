
// defining the parent class BankAccount
class BankAccount {
    constructor(ownerName, startingBalance, acctNum) {
        this.ownerName = ownerName;
        this.balance = startingBalance;
        this.acctNum = acctNum;
    };

    deposit(amount) {
        this.balance = this.balance + amount;
    };

    withdraw(amount) {
        this.balance = this.balance - amount;
    };
}

// testing the instantiating of the parent class BankAccount
const bankAccountOne = new BankAccount("Ben", 100, 1);

// testing the methods in BankAccount class
bankAccountOne.deposit(100);
bankAccountOne.withdraw(50);


class CheckingAccount extends BankAccount {
    constructor(ownerName, startingBalance, acctNum) {
        super(ownerName, startingBalance, acctNum)
        
    }
}