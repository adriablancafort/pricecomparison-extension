<script>
  let show = $state(true);

  const closePopup = () => {
    show = false;
  };
</script>

{#if show}
  <div class="fixed top-2.5 right-2.5 bg-white border border-gray-300 shadow-md p-4 rounded-lg z-50">
    <h3 class="m-0 mb-2">Hello from the Popup!</h3>
    <p>This is a Svelte-powered popup injected into the page.</p>
    <button class="bg-blue-500 text-white border-none py-2 px-4 rounded cursor-pointer hover:bg-blue-700" onclick={closePopup}>Close</button>
  </div>
{/if}
