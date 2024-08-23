import { BonusAccount } from "./class/BonuAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);
peopleAccount.deposit(150);
console.log(peopleAccount);
peopleAccount.withdraw(100);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log(companyAccount);
companyAccount.deposit(150);
console.log(companyAccount);
companyAccount.withdraw(50);
console.log(companyAccount);
companyAccount.getLoan(500);
console.log(companyAccount);

const bonusAccount: BonusAccount = new BonusAccount("Bonus", 30);
console.log(bonusAccount);
bonusAccount.deposit(200);
console.log(bonusAccount);
bonusAccount.withdraw(100);
console.log(bonusAccount);

