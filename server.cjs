const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname)));

// Route all requests to index.html so that React Router handles them
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
