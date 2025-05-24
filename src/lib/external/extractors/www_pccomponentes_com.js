export function www_pccomponentes_com(url) {
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    for (const script of jsonLdScripts) {
        try {
            const data = JSON.parse(script.textContent);
            
            if (data['@type'] === 'product' && data.offers && data.name) {
                let price;
                
                if (data.offers['@type'] === 'AggregateOffer') {
                    price = data.offers.offers?.price;
                } else {
                    price = data.offers.price;
                }
                
                return {
                    url: data.url,
                    title: data.name,
                    price: parseFloat(price)
                };
            }
        } catch (e) {
            continue;
        }
    }
    
    return null;
}