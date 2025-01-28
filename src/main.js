import { mount } from 'svelte';
import './app.css';
import App from './Popup.svelte';

const container = document.createElement('price-tracker');
document.documentElement.appendChild(container);

const shadowRoot = container.attachShadow({ mode: 'open' });

const styles = document.createElement('link');
styles.rel = 'stylesheet';
styles.href = chrome.runtime.getURL('styles.css');
shadowRoot.appendChild(styles);

mount(App, { target: shadowRoot });
