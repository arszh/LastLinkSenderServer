


const Url = require("../modules/Url");
const validateInputDate = require("../validation/url");

module.exports = function (app) {
    app.get("/url/:size", (req,res)=>{

        const limit = parseInt(req.params.size);
        Url.find().sort({date: -1}).limit(limit).then(urls => {
          if (!urls) {
            return res.status(404).json("There is not url");
          }

          res.json(urls.map(obj => { 
              return {
                url:obj.url,
                name:obj.name
                }
            }
            ));
        })
      })
    
      app.post(
        "/url",
        (req, res) => {
          const { errors, isValid } = validateInputDate(req.body);
          if(isValid){
            const obj = {
              url:req.body.lastUrl,
              name:req.body.name
            }
            new Url(obj).save().then(obj => {
              res.status(200)
              res.json(obj)
            }).catch(err => {
              res.status(500)
              res.json(err)
            });
    
          }else{
            res.status(400)
            res.json(errors)
          }
        }
      );
    


}