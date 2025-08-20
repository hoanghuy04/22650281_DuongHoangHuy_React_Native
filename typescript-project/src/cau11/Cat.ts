import {AnimalBase} from "./AnimalBase"

export class Cat extends AnimalBase {
  meow(): void {
    console.log(`${this.name} says Meow`);
  }
}