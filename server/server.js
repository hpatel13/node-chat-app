const path= require('path');
const publicPath = path.join(__dirname,'../public');
const express =  require('express');


var app = express();
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("started server on port ",port);
});

app.use(express.static(publicPath));

module.exports = {app};
