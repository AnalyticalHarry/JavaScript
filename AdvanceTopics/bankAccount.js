class BankAccount {
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder; 
        this.balance = balance; 
        this.transactionHistory = []; 
    }
    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            const transaction = {
                type: 'Deposit',
                amount: amount,
                date: new Date()
            };
            this.transactionHistory.push(transaction);
            console.log(`$${amount} deposited. New balance: $${this.balance}`);
        } else {
            console.log('Deposit amount must be greater than zero.');
        }
    }
    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            const transaction = {
                type: 'Withdrawal',
                amount: amount,
                date: new Date()
            };
            this.transactionHistory.push(transaction);
            console.log(`$${amount} withdrawn. New balance: $${this.balance}`);
        } else if (amount > this.balance) {
            console.log('Insufficient funds.');
        } else {
            console.log('Withdrawal amount must be greater than zero.');
        }
    }
    // Method to display a mini statement
    miniStatement() {
        console.log(`Mini Statement for ${this.accountHolder}`);
        console.log('--------------------------------');
        this.transactionHistory.forEach((transaction, index) => {
            console.log(
                `${index + 1}. ${transaction.type} of $${transaction.amount} on ${transaction.date}`
            );
        });
        const withdrawals = this.transactionHistory.filter(t => t.type === 'Withdrawal').length;
        console.log(`\nTotal Withdrawals: ${withdrawals}`);
    }
}


const myAccount = new BankAccount('John Doe', 1000);
myAccount.deposit(500);  
myAccount.deposit(200);  
myAccount.withdraw(300); 
myAccount.withdraw(150); 
myAccount.withdraw(2000);
myAccount.miniStatement();
