import {AnimalBase} from "./AnimalBase"

export class Dog extends AnimalBase {
  bark(): void {
    console.log(`${this.name} says Woof`);
  }
}