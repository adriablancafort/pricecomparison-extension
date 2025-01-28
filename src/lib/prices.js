export function getPrices() {
  let currentLink = window.location.href;
  let prices = [];

  if (currentLink.includes("amazon")) {
    prices = [
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
    ]
  }

  return prices;
}

export function getAmazonPrice() {
  const priceWhole = document.querySelector('.a-price-whole')?.textContent || '';
  const priceFraction = document.querySelector('.a-price-fraction')?.textContent || '';

  return `${priceWhole}${priceFraction}`;
}
