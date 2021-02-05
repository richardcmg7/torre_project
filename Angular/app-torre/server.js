const express = require('express');
const ngApp = express();
ngApp.use(express.static('./dist/app-torre'));
ngApp.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/app-torre/'})});
  ngApp.listen(process.env.PORT || 8080);
