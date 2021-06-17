const pingAPI = require("../controllers/pingAPI") 
const posts = require("../controllers/externalAPI")

module.exports= function(app){
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

// Ping route

app.get("/api/ping",

pingAPI.pingAPI

);

app.get("/api/posts",

      posts.externalAPI

)



}

