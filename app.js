 let express = require("express");
  var path = require('path');
  let app = require('express')();
  let http = require('http').Server(app);


   app.use(express.static(path.join(__dirname, 'dist')));



  app.get('*', function(req, res) {
   res.sendFile(path.join(__dirname, 'dist/index.html'));
   });




   const port = process.env.PORT || '80';
   app.set('port', port);

   http.listen(port, function() {
   console.log('listening on *:80');
 });