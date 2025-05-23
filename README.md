# Price Tracker

Compare prices of other websites and get the best deal.

## Features

- **Hot Module Replacement (HMR)** in development mode with Vite
- **Shadow DOM** encapsulation to avoid CSS conflicts with host websites

## Setup

### Prerequisites

- Node.js (version 18 or higher)
- Chrome browser

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd pricetracker-extension
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file at the root of the project and add your API endpoint:
   ```env
   VITE_API_URL=http://localhost:8000
   ```

### Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Load the `dev/` folder as an unpacked extension in Chrome

3. Visit any website - the extension popup will be injected automatically

4. Make changes to and see them update in real-time thanks to Vite HMR!

### Production

1. Make sure your `.env` file contains the correct production API endpoint

2. Create the production bundle:
   ```bash
   npm run build
   ```

3. Load the `dist/` folder as an unpacked extension in Chrome

4. Visit any website to test the extension

## Loading the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`

2. Toggle **"Developer mode"** to ON in the top-right corner

3. Click **"Load unpacked"**

4. Select the folder where you have your extension bundle. In this case `dev/` for development and `dist/` for production