const express = require('express');
const app = express();
const mongoose = require("mongoose");
const {UserRoute} = require('./routes/index');
require('dotenv').config({path: './.env'});

/* Moongoose connect */
mongoose.connect(
    `mongodb+srv://${process.env.DEV_USER}:${process.env.DEV_PASSWORD}@ecommerce.kvyep7b.mongodb.net/Ecom?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
/* End */

/* All express middleware are here */
app.use(express.json());
/* End */

/* All routes are here */
app.use('/user',UserRoute);
/* End */


app.listen(process.env.DEV_PORT, () => {
    console.log(`Server is listening on port ${process.env.DEV_PORT}`);
});

