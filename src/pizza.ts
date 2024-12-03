import { PizzaProtocol } from "./pizza-protocol";

export class Pizza implements PizzaProtocol {
    public toppings: string[] = [];

    constructor(public size: string = '', public dough: string = '', toppings: string[] = []) {
        this.toppings = toppings;
    }

    display(): string {
        return `Pizza de ${this.size} com massa ${this.dough}, coberta com: ${this.toppings.join(', ')}`;
    }
}
