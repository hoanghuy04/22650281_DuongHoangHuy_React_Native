import { Book } from "./Book";
import { User } from "./User";

export class Library {
    books: Book[] = [];
    users: User[] = [];

    addBook(b: Book): void {
        this.books.push(b);
        console.log(`current size of books: ${this.books.length}`);
    }

    addUser(u: User): void {
        this.users.push(u);
        console.log(`current size of users: ${this.users.length}`);
    }
}