<script>
  import PriceCard from "$lib/components/PriceCard.svelte";
  import PriceButton from "$lib/components/PriceButton.svelte";

  let { data } = $props();
  let showPopup = $state(false);
  let showButton = $state(true);
</script>

{#if showButton && data.prices.length > 0}
  <PriceButton
    count={data.prices.length}
    onClick={() => {
      showButton = false;
      showPopup = true;
    }}
  />
{/if}

{#if showPopup && data.prices.length > 0}
  <div class="popup slide-in">
    <h3>Better prices found!</h3>
    <div class="prices-container">
      {#each data.prices as price}
        <PriceCard {price} />
      {/each}
    </div>
    <button
      class="close-button"
      on:click={() => {
        showPopup = false;
        showButton = true;
      }}>x</button
    >
  </div>
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

  .slide-in {
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
