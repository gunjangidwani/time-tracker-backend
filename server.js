const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./route/routes')
const MongoClient = require('mongodb').MongoClient;


const app = express()

app.use(bodyParser.json());
// app.use('/',cors);
app.use('/', router);

app.get('/', (req, res) => res.send('Hello World!'))


const uri = "mongodb+srv://gunjan:Axisrooms321%23@cluster0-s80bg.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, })
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log('DB Connection Error', err);
});

// mongoose.set('useUnifiedTopology', true);


// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
app.listen(3000, () => {
    console.log("node server Started at: 3000")
})
