import { mount, unmount } from 'svelte';
import './app.css';
import Popup from './Popup.svelte';
import { getPrices } from "$lib/external/main.js"; // in the future from CDN
// const module = await import(CDN_URL);
// const data = await module.getPrices(currentUrl);

async function mountShadowRoot() {
  const container = document.createElement('price-comparison');
  document.documentElement.appendChild(container);

  shadowRoot = container.attachShadow({ mode: 'open' });

  if (import.meta.env.PROD) {
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = chrome.runtime.getURL('styles.css');
    shadowRoot.appendChild(styles);
  } else {
    const styles = document.createElement('style');
    const css = await import('./app.css?raw');
    styles.textContent = css.default;
    shadowRoot.appendChild(styles);
  }
}

async function handleNavigation() {
  // destroy previous popup instance
  if (popup) {
    unmount(popup);
    popup = null;
  }

  setTimeout(async () => {
    // fetch data and mount popup
    const data = await getPrices(currentUrl);
    if (data) {
      if (!shadowRoot) await mountShadowRoot();
      popup = mount(Popup, { target: shadowRoot, props: { data } });
    }
  }, 10);
}

let shadowRoot;
let popup;
let currentUrl;

const observer = new MutationObserver(async () => {
  const newUrl = window.location.href;
  if (newUrl !== currentUrl) {
    currentUrl = newUrl;
    handleNavigation()
  }
});

observer.observe(document, { subtree: true, childList: true });