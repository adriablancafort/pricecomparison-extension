export function generic(url) {
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    for (const script of jsonLdScripts) {
        try {
            const data = JSON.parse(script.textContent);
            
            if (data['@type'] === 'Product' && data.name && data.offers && data.offers.price) {
                return {
                    url: data.offers.url || url,
                    title: data.name,
                    price: parseFloat(data.offers.price)
                };
            }
        } catch (e) {
            continue;
        }
    }
    
    return null;
}
