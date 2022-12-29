"use strict";

var express = require('express');

var app = express(); 

app.use('/public', express["static"]('public')); 

app.use(express.urlencoded());

require('./middlewares/dbLocal.mdw')(app);

require('./middlewares/session.mdw')(app);

require('./middlewares/passport.mdw')(app);

require('./middlewares/local.mdw')(app);

require('./middlewares/view.mdw')(app);

require('./middlewares/route.mdw')(app);

require('./middlewares/error.mdw')(app);

require('./middlewares/paypal.mdw')(app);

require('./middlewares/cloudinary.mdw')(app);

app.listen(8000, console.log('Server running on port 8000')); 
