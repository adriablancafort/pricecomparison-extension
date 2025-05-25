export function generic(url) {
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    for (const script of jsonLdScripts) {
        try {
            const data = JSON.parse(script.textContent);
            
            if (data['@type'] === 'Product' && data.name && data.offers) {
                const offers = Array.isArray(data.offers) ? data.offers[0] : data.offers;
                
                return {
                    url: offers.url || url,
                    title: data.name,
                    price: parseFloat(offers.price),
                    currency: offers.priceCurrency || 'EUR',
                    sku: data.sku || data.mpn,
                    brand: data.brand?.name,
                    category: data.category,
                    image: Array.isArray(data.image) ? data.image[0] : data.image,
                    condition: data.itemCondition,
                    availability: offers.availability,
                    rating: data.aggregateRating?.ratingValue ? parseFloat(data.aggregateRating.ratingValue) : null,
                    reviewCount: data.aggregateRating?.reviewCount ? parseInt(data.aggregateRating.reviewCount) : null,
                    seller: offers.offeredBy || offers.seller?.name,
                    originalPrice: offers.priceSpecification?.price ? parseFloat(offers.priceSpecification.price) : null
                };
            }
        } catch (e) {
            continue;
        }
    }
    
    return null;
}