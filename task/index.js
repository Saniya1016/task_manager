import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 4000;

app.use(morgan('dev'));

app.listen(port, () => {
    console.log('Listening on port 4000');
});
