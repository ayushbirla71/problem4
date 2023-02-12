const express = require('express');
const { route } = require('./event/events');

const app=express();


app.use(express.json())
app.use('/',route)


app.listen(process.env.PORT||3000, function(){console.log('Our First Project running On PORT '+(process.env.PORT||3000))
})