import { Book } from "./Book";
import { User } from "./User";
import { Library } from "./Library";

const book = new Book("math");
const user = new User("Huy");

const library = new Library();
library.addBook(book);
library.addUser(user);