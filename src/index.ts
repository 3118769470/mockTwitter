import express from 'express';
import userRoutes from './routes/userRoutes';
import twittRoutes from './routes/userRoutes';
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});
app.use('/user',userRoutes);
app.use('/twitt',twittRoutes);


app.listen(3000, () => {
    console.log('server is listening on port 3000');
});