document.getElementById('google')?.addEventListener('click', () => {
  runTest('google');
});
document.getElementById('duck')?.addEventListener('click', () => {
  runTest('duck');
});
document.getElementById('bing')?.addEventListener('click', () => {
  runTest('bing');
});

interface TestResponse {
  message: string;
}

function logMessage(message: string) {
  const logArea = document.getElementById('logArea') as HTMLTextAreaElement;
  if (logArea) {
    logArea.value += message + '\n';
    logArea.scrollTop = logArea.scrollHeight; // Scroll to the bottom as new logs are added
  }
}

function runTest(testName: string) {
  logMessage(`Running ${testName} test...`);
  fetch(`http://localhost:3000/runTest`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ test: testName }),
  })
    .then(response => response.json())
    .then(data => {
      logMessage(data.message);
    })
    .catch(error => {
      logMessage('Error: ' + error.message);
    });
}
