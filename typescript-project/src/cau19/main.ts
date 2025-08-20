import { Animal } from "./Animal";
import { Cat } from "./Cat";
import { Dog } from "./Dog";

const animals: Animal[] = [new Dog(), new Cat(), new Animal()];
animals.forEach(a => a.sound());
