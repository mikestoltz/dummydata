var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the home page route
app.get('/', function(req, res) {
    // ejs render automatically looks in the views folder
    res.json({
      notifications: [{
        title: "test notification",
        description: "this is a notification",
        time: new Date().getTime()
      },
      {
        title: "major notification",
        description: "something is seriously wrong",
        time: new Date().getTime()
      },
      {
        title: "storage getting full",
        description: "this cluster is running out of open storage",
        time: new Date().getTime()
      }]
    });
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});