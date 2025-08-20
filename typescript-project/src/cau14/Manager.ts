import { Employee } from "./Employee";

export class Manager extends Employee {
  manage(): void {
    console.log(`${this.name} is managing`);
  }
}