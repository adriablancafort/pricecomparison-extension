<script>
    let { price } = $props();
</script>

<a href={price.url} target="_blank">
    <div class="price-card">
        <img src={price.thumbnail_url} alt="Icon" width="44" height="44" />
        <span class="title">{price.retailer_name}</span>
        <span class="price">{price.price}</span>
    </div>
</a>

<style>
  .price-card {
    list-style: none;
    cursor: pointer;
    padding: 6px 16px 6px 12px;
    display: flex;
    align-items: center;
  }

  .title {
    margin-left: 8px;
    color: #555555;
    font-size: 16px;
  }

  .price-card:hover .title {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }

  .price {
    margin-left: auto;
    font-size: 16px;
  }
</style>