const express = require('express');
const userRouter = require('./routes/user')
const app = express();
app.use('/users', userRouter);

app.get('/users/:userId/record/:recordId', (req,res,next) => {});
app.get('/users/:userId/record', (req,res,next) => {});
app.post('/users/:userId/record', (req,res,next) => {});
app.put('/users/:userId/record/:recordId', (req,res,next) => {});
app.delete('/users/:userId/record/:recordId', (req,res,next) => {});

app.listen(4000, () => {
    console.log('Server is running');
});