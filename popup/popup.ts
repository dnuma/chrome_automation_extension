document.addEventListener('DOMContentLoaded', () => {
  const buttonsContainer = document.getElementById('buttons') as HTMLDivElement;
  const tests = [
    { name: 'Test 1', command: 'npm run test1' },
    { name: 'Test 2', command: 'npm run test2' },
    { name: 'Test 3', command: 'npm run test3' },
  ];

  tests.forEach(test => {
    const button = document.createElement('button');
    button.textContent = test.name;
    button.onclick = () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // chrome.tabs.sendMessage(tabs[0].id, { command: test.command });
      });
    };
    buttonsContainer.appendChild(button);
  });
});