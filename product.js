// Câu 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
//Cau2
const products = [
    new Product("P1", "iPhone 15", 25000000, 10, "Electronics", true),
    new Product("P2", "MacBook M3", 35000000, 5, "Electronics", true),
    new Product("P3", "Chuột Logitech", 500000, 0, "Accessories", false),
    new Product("P4", "Bàn phím cơ", 1200000, 20, "Accessories", true),
    new Product("P5", "Tai nghe Sony", 4500000, 15, "Accessories", true),
    new Product("P6", "Ốp lưng iPhone", 200000, 50, "Accessories", true)
];

// Cau 3
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));

// Cau 4
const inStock = products.filter(p => p.quantity > 0);

// Cau 5
const hasExpensiveProduct = products.some(p => p.price > 30000000);

// Cau 6
const allAccAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

// Cau 7
const totalValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);

// Cau 8
console.log("Danh sách sản phẩm (for...of)");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// Cau 9
console.log("Chi tiết sản phẩm đầu tiên (for...in)");
const firstProd = products[0];
for (const key in firstProd) {
    console.log(`${key}: ${firstProd[key]}`);
}

// Câau 10
const availableNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);