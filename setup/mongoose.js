const mongoose = require("mongoose");
const mongoURI = require("../config/keys").mongoURI;




module.exports = function () {

    mongoose
    .connect(mongoURI,{useNewUrlParser: true})
    .then(() => console.log(`'MongoDB Connected`))
    .catch(err => console.log(err));


}
