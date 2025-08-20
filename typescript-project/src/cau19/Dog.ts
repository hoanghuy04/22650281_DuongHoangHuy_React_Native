import { Animal } from "./Animal";

export class Dog extends Animal {
  sound(): void {
    console.log("Woof");
  }
}
