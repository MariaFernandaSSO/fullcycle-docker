const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const pool = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
});

pool.query(`
    CREATE TABLE IF NOT EXISTS people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`);

app.get('/', (req, res) => {
    const names = ['Wesley', 'Patricia', 'Carlos', 'Ana', 'João', 'Maria', 'Pedro', 'Julia', 'Lucas', 'Fernanda'];
    const randomName = names[Math.floor(Math.random() * names.length)];

    pool.query('INSERT INTO people(name) VALUES (?)', [randomName], () => {
        pool.query('SELECT name FROM people ORDER BY id DESC', (err, results) => {
            if (err) return res.status(500).send('Erro no banco de dados');

            const list = results.length
                ? results.map(r => `<li>${r.name}</li>`).join('')
                : '<li><em>Nenhum registro encontrado</em></li>';

            res.send(`<h1>Full Cycle Rocks!</h1><ul>${list}</ul>`);
        });
    });
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
