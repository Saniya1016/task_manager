import express from 'express';
import morgan from 'morgan';
import router from './routes/task_api';

const app = express();
const port = 4000;

app.use(morgan('dev'));
app.use('/task', router);


app.listen(port, () => {
    console.log('Listening on port 4000');
});

//event bus will be used when collaboattors are addedd on a task => creatte and add same tassk in those 2 ses tables