const mongoose = require('mongoose');
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then((x) => {
    console.log(`Connected to the database :  "${x.connections[0].name}"`);
})
.catch((error) => {
    console.error('error connecting to mongo ', error );
})