// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do MongoDB
mongoose.connect('SUA_STRING_DE_CONEXAO_MONGODB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão ao MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo ao seu servidor online!');
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor online em http://localhost:${PORT}`);
});
