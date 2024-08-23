import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (value: number) => {
        this.setBalance(value + 10);
        console.log("deposito com bonus efetuado")
    }
}
