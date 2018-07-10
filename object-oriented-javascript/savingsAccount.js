class SavingsAccount{
    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    deduct(amount){
        if(this.balance >= amount )
            this.balance -= amount;
        else
            console.error('Not enough balance');
    }

    transfer(person, amount){
        if(this.balance >= amount){
            this.balance -= amount;
            person.balance += amount;
        }
        else
            console.error('Not enough balance');
    }
    
    showBalance(){
        console.log(`${this.name}'s balance is: $${this.balance}`);
    }

}

// ankit's savings acount
const ankit = new SavingsAccount(1, 'ankit', 5000);
// shohan's savings account
const shohan = new SavingsAccount(1, 'shohan', 5000);

ankit.transfer(shohan, 3000);
ankit.deduct(1000);
shohan.showBalance();
shohan.deposit(2000);
ankit.showBalance();