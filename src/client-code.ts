import { PizzaDirector } from './pizzaDirector';
import { MargheritaPizzaBuilder } from './margheritaPizzaBuilder';
import { PepperoniPizzaBuilder } from './pepperoniPizzaBuilder';

console.log("\nPizza Margherita:");
const margheritaPizzaBuilder = new MargheritaPizzaBuilder();
const directorMargherita = new PizzaDirector(margheritaPizzaBuilder);
console.log(directorMargherita.makeMargheritaPizza().display());

console.log("\nPizza Pepperoni:");
const pepperoniPizzaBuilder = new PepperoniPizzaBuilder();
const directorPepperoni = new PizzaDirector(pepperoniPizzaBuilder);
console.log(directorPepperoni.makePepperoniPizza().display());

console.log("\nPizza Personalizada:");
const personalizadaPizzaBuilder = new PepperoniPizzaBuilder();
const directorPersonalizada = new PizzaDirector(personalizadaPizzaBuilder);

personalizadaPizzaBuilder.setSize('grande')
  .setDough('recheada')
  .addTopping('Queijo')
  .addTopping('Azeitonas')
  .addTopping('Cogumelos');


const personalizadaPizza = personalizadaPizzaBuilder.getResult();
console.log(personalizadaPizza.display());
