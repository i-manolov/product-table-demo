const express = require('express')
const app = express()
const bodyParser = require('body-parser').urlencoded({extended: false})
const path = require('path')

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.post('/exception', bodyParser, (req) => {
  console.error(req.ip, req.get('referrer'), req.body)
})

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
