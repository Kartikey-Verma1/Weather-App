# Weather App 🌦️

A responsive React-based weather dashboard that allows users to search for any city and view real-time weather conditions and forecasts.

## 🚀 Features

- Search for any city to get current weather data
- View temperature, humidity, wind speed, and daily forecast
- Real-time API integration using [Meteosource Weather API](https://www.meteosource.com/)
- Stores last searched city using `localStorage` so the UI persists after page reload
- Built using React with modular components
- Clean and responsive UI (currently optimized for desktop)

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript, HTML, CSS
- **API:** Meteosource Weather API
- **Build Tool:** Vite

## ⚠️ Note on API Usage

To make the app viewable without requiring an API key setup, real-time API fetching has been **temporarily disabled** in the code. Instead, the application currently displays mock weather data to preserve the UI functionality.

This allows reviewers or contributors to:
- View the full UI without setup or API access
- Experience the core interface and layout
- Understand the data flow logic using placeholder data

### 📍 Where to enable real data fetching:
To re-enable API functionality, simply uncomment the relevant logic in the file: `src/components/Home.jsx`


## 📦 Installation & Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/Kartikey-Verma1/Weather-App.git
cd Weather-App
npm install
npm run dev
