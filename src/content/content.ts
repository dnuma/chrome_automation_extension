chrome.runtime.onMessage.addListener(
  (request: { message: string }, sender: chrome.runtime.MessageSender, sendResponse: (response: { received: boolean }) => void) => {
    console.log("Message received in content script:", request.message);
    sendResponse({ received: true });
  }
);

console.log("Content script loaded!");
