const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Servidor de cálculo no ar!</h1>');
});

app.post('/somar', (req, res) => {
    const { a, b } = req.body;
    const resultado = a + b;
    res.json({ operacao: 'soma', resultado: `A soma de ${a} e ${b} é: ${resultado}` });
});

app.post('/subtrair', (req, res) => {
    const { a, b } = req.body;
    const resultado = a - b;
    res.json({ operacao: 'subtracao', resultado: `A subtração de ${a} menos ${b} é: ${resultado}` });
});

app.post('/multiplicar', (req, res) => {
    const { a, b } = req.body;
    const resultado = a * b;
    res.json({ operacao: 'multiplicacao', resultado: `A multiplicação de ${a} por ${b} é: ${resultado}` });
});

app.post('/dividir', (req, res) => {
    const { a, b } = req.body;
    if (b === 0) {
        return res.status(400).json({ error: 'Divisão por zero não é permitida.' });
    }
    const resultado = a / b;
    res.json({ operacao: 'divisao', resultado: `A divisão de ${a} por ${b} é: ${resultado}` });
});

app.post('/potencia', (req, res) => {
    const { a, b } = req.body;
    const resultado = Math.pow(a, b);
    res.json({ operacao: 'potencia', resultado: `${a} elevado a ${b} é: ${resultado}` });
});

app.post('/resto', (req, res) => {
    const { a, b } = req.body;
    const resultado = a % b;
    res.json({ operacao: 'resto', resultado: `O resto da divisão de ${a} por ${b} é: ${resultado}` });
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Servidor não iniciou por conta do erro: ${error}`);
    } else {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    }
});