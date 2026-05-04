const express = require('express');
const path = require('path');
const app = express();

// Statik dosyaları serve et
app.use(express.static(path.join(__dirname, 'public')));

// Tüm route'lar için index.html'i döndür
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Beylikdüzü Korku Evi sitesi http://localhost:${PORT} adresinde çalışıyor`);
});
