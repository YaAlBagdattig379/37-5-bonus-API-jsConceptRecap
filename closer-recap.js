// example : 1 (only desposit money by function)
const bankSbi = owner =>{
    balance = 0;
    return amount => {
      // balance = balance + amount;
      balance += amount;
      return balance;
      // console.log(balance)
    } 

}
const heroAlamBank = bankSbi('Hero Alam')
// console.log(balance);
const heroAlam1 = heroAlamBank(300);
const heroAlam2 = heroAlamBank(200);
const heroAlam3 = heroAlamBank.balance;
const heroAlam4 = heroAlamBank(100);
// console.log(heroAlam1,heroAlam2,heroAlam3,heroAlam4);




// example : 2   ( you can deposit and withdraw money in bank by object funcition)
const bankBaroda = owner =>{
    balance = 0;
    return {
      deposit : amount =>{
        // balance = balance + amount;
        balance += amount;
        return balance;
      },
      withdraw : amount =>{
        // balance = balance - amount;
        balance -= amount;
        return balance;
      },
    } 
}
const chotuAlamBank = bankBaroda('Hero Alam')
// deposit money;
const chotuAlam1 = chotuAlamBank.deposit(300);
const chotuAlam2=  chotuAlamBank.deposit(200);
const chotuAlam3=  chotuAlamBank.balance;
const chotuAlam4 = chotuAlamBank.deposit(100);
console.log(chotuAlam1,chotuAlam2,chotuAlam3,chotuAlam4);
// withdraw money;
const chotuAlamA = chotuAlamBank.withdraw(300);
const chotuAlamB = chotuAlamBank.withdraw(200);
const chotuAlamC = chotuAlamBank.balance;
const chotuAlamD = chotuAlamBank.withdraw(100);
console.log(chotuAlamA,chotuAlamB,chotuAlamC,chotuAlamD);