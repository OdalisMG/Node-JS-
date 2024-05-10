

const mongoose = require ('mongoose');

const mongoDBURL="mongodb+srv://godalis64:a7UJxEiyy22aieTR@cluster0.ki4wmpa.mongodb.net/";

function connectDB () {
    return new Promise ((res, rej) => {
        mongoose
        .connect(mongoDBURL)
        .then(() => {
            console.log("connected to mongoDB")
            res();
        })
        .catch((err) => {
            console.log("error connecting to mongoDB", err);
            rej(err);
        });
    });
}
       
      
module.exports = connectDB;



