//import statements
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/product-routes');
//middleware
const app = express();
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send("Hello Ashish");
});

app.use('/products', router);

//connection and ports
app.listen(5000);
mongoose.connect('mongodb+srv://ashish:DH16AlLo5Z9mOj7i@cluster0.3m5w9.mongodb.net/shop?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Connected to the database.");
}).catch((err => {
    console.log(err);
})
);

//first_backend_project:mongodb_password: DH16AlLo5Z9mOj7i