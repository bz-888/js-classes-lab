// ==============================
// Bank Accounts Exercise
// ==============================


// defining the parent class BankAccount
class BankAccount {
    constructor(ownerName, startingBalance, acctNum) {
        this.ownerName = ownerName;
        this.balance = startingBalance;
        this.acctNum = acctNum;
    };

    deposit(amount) {
        this.balance = this.balance + amount;
        return `Thank you for depositing $${amount}. Your new balance is $${this.balance}.`
    };

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            return `Withdrawal successful. $${amount} withdrawn. Remaining balance is $${this.balance}.`
        } else return `Insufficient funds. Current balance is $${this.balance}.`
    };
}

// testing the instantiating of the parent class BankAccount
const bankAccountOne = new BankAccount("Ben", 100, 1);

// testing the methods in BankAccount class
bankAccountOne.deposit(100);
bankAccountOne.withdraw(50);


class CheckingAccount extends BankAccount {
    constructor(ownerName, startingBalance, acctNum, overdraftEnabled) {
        super(ownerName, startingBalance, acctNum);
        this.overdraftEnabled = overdraftEnabled;
    }

    enableOverdraft(enabled) {
        if (enabled === true) {
            this.overdraftEnabled = true;
            return `Overdrafting is enabled.`;
        } else {
            this.overdraftEnabled = false;
            return `Overdrafting is disabled.`;
        };
    };
    withdraw(amount) {
        if (this.overdraftEnabled === true) {
            this.balance = this.balance - amount;
            if (this.balance < 0) {
                return `Withdrawal successful. $${amount} withdrawn. Remaining balance is $${this.balance}. P.S. Overdrafting is enabled. This account is now overdrawn.`;
            } else {
                return `Withdrawal successful. $${amount} withdrawn. Remaining balance is $${this.balanace}. P.S. Overdrafting is enabled. This account is not currently overdrawn.`;
            }
        } else {
            if (amount <= this.balanace) {
                this.balanace = this.balance - amount;
                `Withdrawal successful. $${amount} withdrawn. Remaining balance is $${this.balance}. P.S. Overdraft is not enabled.`;
            } else {
                return `Overdraft is not enabled. Insufficient funds for this withdrawal. You tried to withdraw $${amount}, but the balanace is currently only $${this.balance}.`;
            }
        }
    }
}

const checkingAccountOne = new CheckingAccount("Ben", 5, 2, true);


class SavingsAccount extends BankAccount {
    constructor(ownerName, startingBalance, acctNum) {
        super(ownerName, startingBalance, acctNum);
    }

    withdraw(amount) {
        return `Withdrawal is not available for this account as this is a savings account.`;
    }
}


// ==============================
// People Exercise
// ==============================
