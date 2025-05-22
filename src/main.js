import { mount } from 'svelte';
import './app.css';
import App from './Popup.svelte';

const root = document.querySelector('price-tracker');
mount(App, { target: root.shadowRoot });
