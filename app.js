
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , project = require('./routes/project')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('sctalk admin manager'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

//User Routes
app.get('/user', user.index);
app.get('/user/new', user.create);

app.post('/user/new', user.doCreate);
/*app.get('/user/edit', user.edit);
app.get('/user/delete', user.confirmDelete);
app.post('/user/delete', user.doDelete);
app.get('/login', user.login);
app.post('/login', user.doLogin);
app.get('/logout', user.doLogout);

//Project Routes
app.get('/project/new', project.create);
app.post('/project/new', project.doCreate);
app.get('/project/:id', project.displayInfo);
app.get('/project/edit/:id', project.edit);
app.post('/project/edit/:id', project.doEdit);
app.get('/project/delete/:id', projcet.confirmDelete);
app.post('/project/delete/:id', projcet.doDelete);*/

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
