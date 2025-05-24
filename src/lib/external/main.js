export async function getPrices(currentUrl) {
  const apiUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiUrl}/v1/prices`, {
    method: 'GET',
    headers: {
      'X-Product-URL': currentUrl
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const prices = await response.json();
  return {
    prices: prices
  };
}
