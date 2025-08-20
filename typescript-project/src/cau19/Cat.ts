import { Animal } from "./Animal";

export class Cat extends Animal {
  sound(): void {
    console.log("Meow");
  }
}
