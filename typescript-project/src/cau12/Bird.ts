import { Flyable } from "./Flyable";

export class Bird implements Flyable {
  fly(): void {
    console.log("Bird is flying");
  }
}