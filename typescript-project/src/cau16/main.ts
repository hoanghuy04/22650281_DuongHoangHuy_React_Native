import { Box } from "./Box";

const box1 = new Box<number>(123);
console.log(box1.getValue());

const box2 = new Box<string>("Hello");
console.log(box2.getValue());
