const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
 res.send('Ok!');
});
app.get('/', res => {
    res.send('chamou o get');
})
app.post('/', res => {
    res.send('chamou o post');
})
app.put('/', res, req => {
    console.log(req.headers)
    res.send('chamou o put');
})
app.delete('/', res => {
    res.send('chamou o delete');
})
app.listen(port, () => {
 console.log(`App listening on port ${port}`);
});
