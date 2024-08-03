const express = require('express');
const dotenv = require('dotenv');
const mainRouter = require('./router/index');

// Environment Variables
dotenv.config({ path: './config/env/config.env' });

const app = express();
const PORT = process.env.PORT;

 
app.use('/api', mainRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}: ${process.env.NODE_ENV}`);
});