import { Employee } from "./Employee";

export class Developer extends Employee {
  code(): void {
    console.log(`${this.name} is coding`);
  }
}