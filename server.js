require('dotenv').config(); //call and configure your dotenv package
const express = require('express');

const mongoose = require('mongoose');

// Data or Models

const Vegetable = require('./models/Vegetable');

const app = express();
const PORT = 3000;

// ======Configuration=====
//which is required when we are rendering templates from views
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//setting a middleware to run in the app which is a function which will
//run in between the request and response cycle
//this is required when we are using POST method
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})

//parses the data from the request
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Vegetables page</h1>')
})

/**
 * Index Route: (return a list of vegetables)
 */

app.get('/vegetables', (req, res) => {
    // res.send(fruits);
    // res.render('fruits/Index', {fruits: fruits})
    Vegetable.find({}, (error, allVegetables) => {
        res.render('vegetables/Index', {vegetables: allVegetables})
    })
})

/**
 * POST method route (accept data from the form)
 */
app.post('/vegetables',(req,res) => {
    
    console.log(req.body);
    //if checked, req.body.readyToEat is set to 'on'
    if(req.body.readyToEat === "on"){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // fruits.push(req.body);
    Vegetable.create(req.body, (error, createdVegetable) => {
        // res.send(createdVegetable);
        res.redirect('/vegetables');
    })
})

/**
 * New Route : (return a form to create a new fruit)
 */
app.get('/vegetables/new', (req,res) => {
    res.render('vegetables/New');
})

/**
 * Show Route: (returns a specific fruit)
 */

app.get('/vegetables/:id', (req, res) => {
    console.log(req.params);
    // res.send(fruits[req.params.indexOfFruitsArray])
    // res.render('fruits/Show', {fruit: fruits[req.params.indexOfFruitsArray]});
    Vegetable.findById(req.params.id, (error, foundVegetable) => {
        res.render('vegetables/Show', {vegetable: foundVegetable})
    })
})

//
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(3000, () => {
    console.log('listening....');
    mongoose.set('strictQuery', false);
    // connect to mongoDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})