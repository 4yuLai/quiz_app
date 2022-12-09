import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import router from './router/route.js';

// import connect database
import connect from './database/conn.js';


const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

config();

const port = process.env.PORT || 8080;

/* route */
app.use('/api', router)

app.get('/', (req, res) => {
    try {
        res.json("get request")
    } catch (error) {
        res.json(error)
    }
})

// connect database
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log("cannot connect to the server");
    }
}).catch((err) => {
    console.log("Invalid database connection");
    console.log(err);
});

