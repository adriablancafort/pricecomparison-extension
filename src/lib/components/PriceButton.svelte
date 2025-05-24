<script>
    export let onClick;
    export let count;
</script>

<button class="price-button" on:click={onClick}>
    <div class="text">
        <span>x{count}</span><span>better</span><span>prices</span>
    </div>
    <span class="arrow">→</span>
</button>

<style>
    .price-button {
        position: fixed;
        top: 10px;
        right: 10px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border: 1px solid #d1d5db;
        border-radius: 8px;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        z-index: 2147483647;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.2s;
    }

    .price-button:hover {
        transform: translateX(-4px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .text {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
        font-size: 0.9em;
    }

    .text span:first-child {
        font-weight: bold;
        color: #4caf50;
    }

    .arrow {
        font-size: 1.2em;
        color: #4caf50;
    }
</style>
