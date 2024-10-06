// This will be compiled to content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command) {
    // Execute the Playwright command here
    // You'll likely need to use a library to execute shell commands
    // For security reasons, directly executing shell commands from an extension is restricted
    console.log(`Executing command: ${request.command}`);

    // Example using a hypothetical 'executeCommand' function
    // executeCommand(request.command);
  }
});