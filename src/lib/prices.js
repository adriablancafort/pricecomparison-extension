export function getPrices() {
  let currentLink = window.location.href;
  let prices = [
    {
      price: "$19.99",
      link: currentLink,
      store: "Store 1"
    },
    {
      price: "$24.99",
      link: currentLink,
      store: "Store 2"
    },
    {
      price: "$17.99",
      link: currentLink,
      store: "Store 3"
    }
  ];

  return prices;
}
