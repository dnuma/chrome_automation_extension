// Add event listeners to buttons
document.getElementById('test1')?.addEventListener('click', () => {
  runTest('test1');
});
document.getElementById('test2')?.addEventListener('click', () => {
  runTest('test2');
});
document.getElementById('test3')?.addEventListener('click', () => {
  runTest('test3');
});

// Define the structure for the response data
interface TestResponse {
  message: string;
}

// Function to run a test
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
