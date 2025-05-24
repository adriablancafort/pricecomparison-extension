export function www_mediamarkt_es(url) {
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    for (const script of jsonLdScripts) {
        try {
            const data = JSON.parse(script.textContent);
            
            if (data['@type'] === 'BuyAction' && data.object && data.object['@type'] === 'Product') {
                const product = data.object;
                
                return {
                    url: product.url,
                    title: product.name,
                    price: product.offers?.price
                };
            }
        } catch (e) {
            continue;
        }
    }
    
    return null;
}