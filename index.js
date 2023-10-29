const mongoose = require('mongoose');
const express = require('express');
const app = express();
const recipeRoute = require('./controller/recipeRoute'); // Update the import
const bodyParser = require('body-parser');
const cors = require('cors');
// const Buffer=require('buffer')


mongoose.set('strictQuery', true);
mongoose.connect(
    'mongodb+srv://challadeepika2004:Deepika2004@cluster0.lakefw4.mongodb.net/recipedb',
    {
        useNewUrlParser: true, // Add this option to avoid deprecation warnings
        useUnifiedTopology: true, // Add this option to avoid deprecation warnings
    }
);

var db = mongoose.connection;
db.on('open', () => console.log('Connected to DB'));
db.on('error', () => console.log('Error Occurred'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/recipeRoute', recipeRoute); // Update the route path
app.listen(4000, () => {
    console.log('Server Started at 4000');
});

// window.Buffer = Buffer;
