<script>
    let { price } = $props();
</script>

<a href={price.link} target="_blank">
    <div class="price-card">
        <p>{price.store} - {price.price}</p>
    </div>
</a>

<style>
  .price-card {
    list-style: none;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  .price-card:hover {
    background-color: #f3f4f6;
  }
</style>