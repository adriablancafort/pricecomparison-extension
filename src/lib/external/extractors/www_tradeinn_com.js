export function www_tradeinn_com(url) {
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    for (const script of jsonLdScripts) {
        try {
            const data = JSON.parse(script.textContent);
            
            if (data['@type'] === 'product' && data.offers && data.offers.length > 0) {
                const offer = data.offers[0]; // Get first offer
                
                return {
                    url: url,
                    title: data.name,
                    price: parseFloat(offer.price)
                };
            }
        } catch (e) {
            // Skip invalid JSON
            continue;
        }
    }
    
    // No product data found
    return null;
}