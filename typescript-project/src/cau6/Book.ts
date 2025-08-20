class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.author = author;
        this.title = title;
        this.year = year;
    }

    displayAllInfo(): void {
        console.log(`title: ${this.title}, author: ${this.author}, year: ${this.year}`);
    }
}

const b = new Book("Hoang", "Huy", 2004)
b.displayAllInfo()