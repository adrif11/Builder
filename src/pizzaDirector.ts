import { PizzaBuilder } from './pizza-builder';
import { Pizza } from './pizza';

export class PizzaDirector {
  private builder: PizzaBuilder;

  constructor(builder: PizzaBuilder) {
    this.builder = builder;
  }

  makeMargheritaPizza(): Pizza {
    this.builder.reset();
    return this.builder
      .setSize('grande')
      .setDough('fina')
      .addTopping('Queijo')
      .addTopping('Tomate')
      .addTopping('Manjericão')
      .getResult();
  }

  makePepperoniPizza(): Pizza {
    this.builder.reset();
    return this.builder
      .setSize('média')
      .setDough('tradicional')
      .addTopping('Queijo')
      .addTopping('Pepperoni')
      .getResult();
  }
}
