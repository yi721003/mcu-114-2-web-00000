import { Product } from "./product";

let products: Product[] = [
  new Product(1, "圖像 Angular 開發入門 第二版", "博碩文化", 500, true, new Date("2024-4-10")),
  new Product(2, "金魚都能懂的 CSS 必學屬性", "博碩文化", 500, true, new Date("2024-4-10")),
  new Product(3, "書籍 A", "博碩文化", 500, false, new Date("2024-4-10")),
  new Product(4, "書籍 B", "博碩文化", 500, true, new Date("2024-4-10")),
  new Product(5, "書籍 C", "博碩文化", 500, false, new Date("2024-4-10")),
  new Product(6, "書籍 D", "博碩文化", 500, false, new Date("2024-4-10")),
];

const newProduct = new Product(0, "書籍 E", "博碩文化", 500, false, new Date("2024-4-10"));
addProduct(newProduct);
console.table(products);

removeProduct(6);
console.table(products);

removeProductById(4);
console.table(products);

// 新增產品
function addProduct(product: Product): void {
  const id = products.length === 0 ? 1 : Math.max(...products.map(({ id }) => id)) + 1;
  product.id = id;
  products.push(product);
}

// 刪除產品 By index
function removeProduct(index: number): void {
  products.splice(index, 1);
}

// 刪除產品 By id
function removeProductById(removeId: number): void {
  const index = products.findIndex(({ id }) => id === removeId);
  products.splice(index, 1);
}
