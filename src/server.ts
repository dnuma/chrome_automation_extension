import express, { Request, Response } from 'express';
import { exec } from 'child_process';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/runTest', (req: Request, res: Response): void => {
  const { test } = req.body;

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
      res.status(400).json({ message: 'Invalid test name' }); 
      return; 
  }

  exec(testCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing test: ${stderr}`);
      res.status(500).json({ message: 'Test execution failed', error: stderr }); 
      return;
    }
    console.log(`Test output: ${stdout}`);
    res.json({ message: 'Test executed successfully', output: stdout }); 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
