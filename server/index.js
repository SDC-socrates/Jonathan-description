const express = require('express');
let app = express();
app.set('port', 3000);
app.use(express.static('client/dist'));
app.listen(app.get('port'), function() {
  console.log(`Listening on port `, app.get('port'));
});