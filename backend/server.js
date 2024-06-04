const express = require('express') ;        //to import express
const app = express() ;     // to make object of express-app
const PORT = 5000 ;     //to define server port (localhost:5000)

app.listen(PORT, console.log(`Backend is running on port : ${PORT} , nodemon working` ));      //to check port and backend is running on console.
app.get('/', (req, res) => res.json({msg: 'Wellcom Mubeen Yasin .....nodemon working...live'}));        //to check port and backend is running on web. Should be restart server
