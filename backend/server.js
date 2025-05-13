
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

// Root test route
app.get('/', (req, res) => {
  res.send('Backend Root - Nutrifox API');
});

// Import product routes
const productRoutes = require('./routes/products');
app.use('/ ', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});