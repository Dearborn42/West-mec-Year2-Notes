import express from 'express';
const app = express();
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});