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
    const body = req.body;
    const soma = body.a + body.b;
    res.json({ operacao: 'soma', resultado: `A soma de ${body.a} e ${body.b} é: ${soma}` });
});

app.post('/multiplicar', (req, res) => {
    const body = req.body;
    const multi = body.a * body.b;
    res.json({ operacao: 'multiplicacao', resultado: `A multiplicação de ${body.a} e ${body.b} é: ${multi}` });
});

app.post('/dividir', (req, res) => {
    const body = req.body;
    const div = body.a / body.b;
    res.json({ operacao: 'divisao', resultado: `A divisão de ${body.a} e ${body.b} é: ${div}` });
});

app.listen(PORT, (error) => {
    if (error) {
        console.log('Servidor nao inicou por conta do error ${error}');
    } else {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    }
});