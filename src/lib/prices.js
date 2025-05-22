export async function fetchPrices() {
  const apiUrl = `${import.meta.env.VITE_API_URL}/prices`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const prices = await response.json();
  return prices;
}
