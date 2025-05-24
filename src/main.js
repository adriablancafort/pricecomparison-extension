import { mount, unmount } from 'svelte';
import './app.css';
import Popup from './Popup.svelte';
import { getPrices } from "$lib/external/main.js"; // in the future from CDN
// const module = await import(CDN_URL);
// const data = await module.getPrices(currentUrl);

const container = document.createElement('price-comparison');
document.documentElement.appendChild(container);

const shadowRoot = container.attachShadow({ mode: 'open' });

if (import.meta.env.PROD) {
  const styles = document.createElement('link');
  styles.rel = 'stylesheet';
  styles.href = chrome.runtime.getURL('styles.css');
  shadowRoot.appendChild(styles);
}

if (import.meta.env.DEV) {
  const styles = document.createElement('style');
  const css = await import('./app.css?raw');
  styles.textContent = css.default;
  shadowRoot.appendChild(styles);
}

let currentUrl;
let popup;

const observer = new MutationObserver(async () => {
  const newUrl = window.location.href;
  if (newUrl !== currentUrl) {
    currentUrl = newUrl;

    // destroy previous popup instance
    if (popup) unmount(popup);

    // fetch the prices data and mount the app
    const data = await getPrices(currentUrl);
    if (data) popup = mount(Popup, { target: shadowRoot, props: { data } });
  }
});

observer.observe(document, { subtree: true, childList: true });