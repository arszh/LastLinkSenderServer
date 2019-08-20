const port = require("../config/keys").serverPort;


module.exports = function (app) {
    
    app.listen(port, () => console.log(`Server runnung on port ${port}`));

}