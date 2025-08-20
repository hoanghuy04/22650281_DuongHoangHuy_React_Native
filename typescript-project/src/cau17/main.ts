import { Logger } from "./Logger";


const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("App started");
console.log(logger1 === logger2);
