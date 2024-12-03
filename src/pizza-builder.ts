import { Pizza } from "./pizza";

export interface PizzaBuilder {
    reset(): void;
    setSize(size: string): PizzaBuilder;
    setDough(dough: string): PizzaBuilder;
    addTopping(topping: string): PizzaBuilder;
    getResult(): Pizza;
}
