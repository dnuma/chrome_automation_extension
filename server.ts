import express, { Request, Response } from 'express';
import { exec } from 'child_process';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/runTest', (req: Request, res: Response) => {
  const { test } = req.body;

  let testCommand: string;
  switch (test) {
    case 'test1':
      testCommand = 'npm run test1';
      break;
    case 'test2':
      testCommand = 'npm run test2';
      break;
    case 'test3':
      testCommand = 'npm run test3';
      break;
    default:
      return res.status(400).json({ message: 'Invalid test name' });
  }

  // Execute the Playwright test using exec
  exec(testCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing test: ${stderr}`);
      return res.status(500).json({ message: 'Test execution failed', error: stderr });
    }
    console.log(`Test output: ${stdout}`);
    res.json({ message: 'Test executed successfully', output: stdout });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
