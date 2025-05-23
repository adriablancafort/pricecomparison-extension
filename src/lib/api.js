import { getSessionId } from "$lib/session.js";

export async function getPrices() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const currentUrl = window.location.href;
  const sessionId = getSessionId();

  const response = await fetch(`${apiUrl}/v1/prices`, {
    method: 'GET',
    headers: {
      'X-Session-ID': sessionId,
      'X-Product-URL': currentUrl
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const prices = await response.json();
  return prices;
}
