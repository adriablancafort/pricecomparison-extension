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
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 16px;
    border-radius: 8px;
    z-index: 10000;
  }

  h3 {
    margin: 0 0 8px;
  }

  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background: #0056b3;
  }
</style>
