var express = require('express');
var app = express();

app.set('port',process.env.PORT || 8888);

app.use(express.static('./client'));

// ==================
// WildCard Route
// ==================
app.get('*',function(req,res){
  res.sendFile('index.html', {'root':'client'})
});

app.listen(app.get('port'),function(){
  console.log('Express server listening on ' , app.get('port'));
});
