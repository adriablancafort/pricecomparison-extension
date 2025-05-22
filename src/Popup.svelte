<script>
  import { fetchPrices } from '$lib/prices.js';
  import PriceCard from '$lib/components/PriceCard.svelte';

  let show = $state(true);
</script>

{#if show}
  <div class="popup slide-in">
    {#await fetchPrices()}
      <p>Loading prices...</p>
    {:then prices}
      {#if prices && prices.length > 0}
        <h3>Better prices found!</h3>
        <div>
          {#each prices as price, index}
            <PriceCard {price} />
          {/each}
        </div>
      {:else}
        <h3>No better prices found.</h3>
      {/if}
    {:catch error}
      <h3>Error loading prices</h3>
      <p>{error.message}</p>
    {/await}
    <button class="close-button" onclick={() => show = false}>x</button>
  </div>
{:else}
  <button class="open-button" onclick={() => show = true}>
    Open
  </button>
{/if}

<style>
  .popup {
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid #d1d5db;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    border-radius: 8px;
    z-index: 2147483647;
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

  .open-button {
    position: fixed;
    top: 50px;
    right: 0px;
    background-color: #f9fafb;
    border: 1px solid #d1d5db;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    border-radius: 8px;
    z-index: 2147483647;
    cursor: pointer;
  }
</style>