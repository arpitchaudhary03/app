import express, { Router } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import basicrouter from './route/routes.js';
import dotenv from 'dotenv';
import * as path from 'path';
import { dirname } from 'path';


const app = express();
const __dirname = path.resolve();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use('/users', basicrouter);
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.json({extended:true}));

// app.post('/add', function(request, response){
//     console.log(request.body);      // your JSON
//      response.send(request.body);    // echo the result back
//   });

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = "mongodb+srv://arpit:arpit12345@crud.za6mh.mongodb.net/CRUDAPP?retryWrites=true&w=majority";

app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

    if (process.env.NODE_ENV == 'production') {
        app.use(express.static('client/build'));
    }

    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`);
    });

}).catch(error => {
    console.log("Error: ", error.message);
});


