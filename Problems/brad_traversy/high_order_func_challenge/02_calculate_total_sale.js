function calculateTotalSalesWithTax(products, taxRate) {
  let totalSale = 0;
  products.map((product) => {
    const { name, price, quantity } = product;
    totalSale += price * quantity;
  });

  let tax = (totalSale * taxRate) / 100;
  return totalSale + tax;
}

const products = [
  { name: "Chocolate", price: 2.5, quantity: 5 },
  { name: "Chips", price: 1.2, quantity: 10 },
  { name: "Soda", price: 1.0, quantity: 8 },
  { name: "Candy", price: 0.5, quantity: 15 },
];

console.log(calculateTotalSalesWithTax(products, 5));
