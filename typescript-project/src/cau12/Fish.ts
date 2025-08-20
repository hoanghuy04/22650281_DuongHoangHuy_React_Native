import { Swimmable } from "./Swimmable";

export class Fish implements Swimmable {
  swim(): void {
    console.log("Fish is swimming");
  }
}

