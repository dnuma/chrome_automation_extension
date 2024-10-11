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

function runTest(testName: string): void {
  fetch(`http://localhost:3000/runTest`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ test: testName }),
  })
    .then(response => response.json())
    .then((data: TestResponse) => console.log(data.message))
    .catch(error => console.error('Error:', error));
}
