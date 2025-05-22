const root = document.createElement('price-tracker');
document.documentElement.appendChild(root);

const shadowRoot = root.attachShadow({ mode: 'open' });

const script = document.createElement('script');
script.type = 'module';
script.src = chrome.runtime.getURL('script.js');
document.head.appendChild(script);

const styles = document.createElement('link');
styles.rel = 'stylesheet';
styles.href = chrome.runtime.getURL('styles.css');
shadowRoot.appendChild(styles);