export function www_pccomponentes_com(url) {
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    for (const script of jsonLdScripts) {
        try {
            const data = JSON.parse(script.textContent);
            
            if (data['@type'] === 'product' && data.offers && data.name) {
                let price, offers;
                
                if (data.offers['@type'] === 'AggregateOffer') {
                    offers = data.offers.offers || data.offers;
                    price = offers.price;
                } else {
                    offers = data.offers;
                    price = offers.price;
                }
                
                return {
                    url: data.url,
                    title: data.name,
                    price: parseFloat(price),
                    currency: offers.priceCurrency,
                    sku: data.sku || data.mpn,
                    brand: data.brand?.name,
                    category: data.category,
                    image: Array.isArray(data.image) ? data.image[0] : data.image,
                    condition: data.itemCondition,
                    availability: offers.availability,
                    rating: data.aggregateRating?.ratingValue ? parseFloat(data.aggregateRating.ratingValue) : null,
                    reviewCount: data.aggregateRating?.reviewCount ? parseInt(data.aggregateRating.reviewCount) : null,
                    seller: offers.offeredBy,
                    originalPrice: offers.priceSpecification?.price ? parseFloat(offers.priceSpecification.price) : null
                };
            }
        } catch (e) {
            continue;
        }
    }
    
    return null;
}