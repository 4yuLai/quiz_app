import express from 'express';
import cors from 'cors';


const app = express();

/* route */
app.get('/', (req, res) => {
    try {
        res.json("get request")
    } catch (error) {
        res.json(error)
    }
})

app.listen(8080, () => {
    console.log('Server connected to http://localhost:8080');
})