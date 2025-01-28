import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = document.createElement('div');
document.body.appendChild(app);

const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.runtime.getURL('styles.css'); 
app.appendChild(style);

mount(App, { target: app });