import { Pizza } from "./pizza";
import { PizzaBuilder } from "./pizza-builder";

export class MargheritaPizzaBuilder implements PizzaBuilder {
    public pizza = new Pizza();
    
    reset(): this {
        this.pizza = new Pizza();
        return this;
    }

    setSize(size: string): PizzaBuilder {
        this.pizza.size = size;
        return this;
    }
    
    setDough(dough: string): PizzaBuilder {
        this.pizza.dough = dough;
        return this;
    }
    
    addTopping(topping: string): PizzaBuilder {
        this.pizza.toppings.push(topping);
        return this;
    }
    
    getResult(): Pizza {
        return this.pizza;
    }
}
