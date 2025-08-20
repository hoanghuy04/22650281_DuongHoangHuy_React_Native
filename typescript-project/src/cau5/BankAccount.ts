class BankAccount {
    balance: number;

    constructor(initBalance: number) {
        this.balance = initBalance
    }

    deposit(amount: number): void {
        if(amount > 0) {
            this.balance += amount;
            console.log("Deposit successfully!");
        } else {
            console.log("Deposit amount must be positive!");
        }
    }

    withdraw(amount: number): void {
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdraw successfully - New balance: ${this.balance}`);
        } else if(amount > this.balance) {
            console.log("Invalid withdraw amount");
        }
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
account.withdraw(1500);