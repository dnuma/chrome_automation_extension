import express, { Request, Response } from 'express';
import { exec } from 'child_process';

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to run tests
app.post('/runTest', (req: Request, res: Response): void => {
  const { test } = req.body;

  // Validate the test name
  let testCommand: string;
  switch (test) {
    case 'google':
      testCommand = 'npm run google';
      break;
    case 'duck':
      testCommand = 'npm run duck';
      break;
    case 'bing':
      testCommand = 'npm run bing';
      break;
    default:
      res.status(400).json({ message: 'Invalid test name' }); // Send response for invalid test name
      return; // Exit the function
  }

  // Execute the Playwright test using exec
  exec(testCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing test: ${stderr}`);
      res.status(500).json({ message: 'Test execution failed', error: stderr }); // Send response for error
      return; // Exit the callback
    }
    console.log(`Test output: ${stdout}`);
    res.json({ message: 'Test executed successfully', output: stdout }); // Send success response
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
