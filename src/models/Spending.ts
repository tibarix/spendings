export class Spending{
    private id:string;
    private description:string;
    private amount:number;
    private createdAt:Date;

    constructor(description,amount){
        this.description = description;
        this.amount = amount;
    }
}