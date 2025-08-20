class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const products: Product[] = [
  new Product("Book", 50),
  new Product("Phone", 300),
  new Product("Pen", 10)
];

const filtered = products.filter(p => p.price > 100);
console.log(filtered);
