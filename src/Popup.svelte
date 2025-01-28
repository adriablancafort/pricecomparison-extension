<script>
  import { getPrices } from './lib/prices.js';
  import PriceCard from './lib/components/PriceCard.svelte';

  const prices = getPrices();

  let show = $state(prices.length > 0);

  const closePopup = () => {
    show = false;
  };
</script>

{#if show}
  <div class="popup slide-in">
    <h3>Better prices found!</h3>
    <div>
      {#each prices as price}
        <PriceCard price={price} />
      {/each}
    </div>
    <button class="close-button" onclick={closePopup}>x</button>
  </div>
{/if}

<style>
  .popup {
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: white;
    border: 1px solid #d1d5db;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    border-radius: 8px;
    z-index: 999;
    width: 250px;
  }

  .close-button {
    position: absolute;
    top: 8px;
    right: 8px;
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-button:hover {
    background-color: #d1d5db;
  }
</style>