export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name;
    };

    getBalance = (): number => {
        return this.balance;
    };

    getStatus = () => {
        return this.status;
    };

    setBalance = (value: number) => {
        this.balance += value;
    };

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.balance += value;
            console.log("Deposito efetuado!");
        }
    };

    withdraw = (value: number): void => {
        if (this.validateStatus() && this.balance > value)
            this.balance -= value;
        console.log("Voce sacou");
    };

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }

        throw new Error("Conta inválida");
    };
}
