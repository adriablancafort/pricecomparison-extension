<script>
  let show = $state(true);

  const closePopup = () => {
    show = false;
  };
</script>

{#if show}
  <div class="popup">
    <h3>Hello from the Popup!</h3>
    <p>This is a Svelte-powered popup injected into the page.</p>
    <button onclick={closePopup}>Close</button>
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
  }
  button {
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #3057d7;
  }
</style>