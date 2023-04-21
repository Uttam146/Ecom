const express = require('express');
const app = express();
const mongoose = require("mongoose");
const {UserRoute} = require('./routes/index');
const port = 3000;

/* Moongoose connect */
mongoose.connect(
    `mongodb+srv://Uttam:uttam@ecommerce.kvyep7b.mongodb.net/Ecom?retryWrites=true&w=majority`,
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


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

