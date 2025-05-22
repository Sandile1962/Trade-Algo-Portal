const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const licenses = [];

app.post('/api/licenses/generate', (req, res) => {
  const newLicense = {
    key: uuidv4(),
    issuedAt: new Date(),
  };
  licenses.push(newLicense);
  res.json(newLicense);
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));