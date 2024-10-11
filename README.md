# Project Description

A Chrome extension that allows you to run Playwright tests with the click of a button. The extension includes a simple UI with buttons for each test and a log area to view the output of test runs directly in the extension popup.

## Features

- Buttons to run Playwright tests (`Google`, `DuckDuckGo`, and `Bing`).
- Console output is shown directly within the extension's popup.
- Integration with a local server to execute the Playwright tests.

<div align="center">
  <img src="https://raw.githubusercontent.com/dnuma/chrome_automation_extension/refs/heads/main/img/demo/extension.png" alt="Playwright Test Runner interface">
</div>

## Requirements

- [Node.js](https://nodejs.org/) (Version 14+)
- [Playwright](https://playwright.dev/)
- Express server for handling test execution.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-repo/chrome_automation_extension.git
cd chrome_automation_extension
```

### 2. Install Dependencies
```bash
npm install
```
This will install all the required packages, including Playwright and Express.

### 3. Build the Extension
Compile the TypeScript files to JavaScript:
```bash
npm run build
```

### 4. Start the server
The extension uses an Express server to trigger Playwright tests. Start the server using:
```bash
npm run start
```

### 5. Load the Extension in Chrome
- Open Chrome and navigate to `chrome://extensions/`.
- Enable the **Developer Mode**
- Click on **Load unpacked** and select the project folder

### 6. Run the Extension
- Navigate to any page that allows script injection, ie: `https://www.wikipedia.org`.
- Click on the extension.
- Click any button.
- Observe results in the mini-embedded console.
