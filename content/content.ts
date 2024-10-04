
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command) {

    console.log(`Executing command: ${request.command}`);

  }
});