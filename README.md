#NPM
##GLOBAL ADDRESSS
				Windows | UNIX
 
$ npm install -g 

$ npm outdated


> ^ Major,Minor,Bug
> ~ Strict Version

NPX 

// Tempararly install applications
$ npx -p 


Node Server

Sucess
200
Redirect 
300
Client Error
400
Server Erro
500


Express for server 
app.get('/users?/:username')
req.param
?  optional user or users - 
app.get('/users/:username?')
? user/james or users
app.post
app.put
app.delete

///////////////////////
const app = express();
 //relitive to app root
app.use(express.static('public'))
 // handle favicon
app.get('/favicon.ico', () => {
	return res.sendStatus(204)
})
app.use('/', routes());
// When nother route found
app.use(function (req, res, next) {
  if (!req.user) return next(createError(401, 'Please login to view this page.'))
  next()
})

app.use(() => {
	res.locals.message = err.message
	const status = err.staus || 500;
	res.locals.error = req.app.get('env' === 'development' ? err : {})
	// Get layout
	return. res.render('error')
})

app.listen(3000)

module.export = app
//////////////////////

Handling Errors in Express

// use next 
app.get('/next', () => {	
	next (new throw erro)
})


Environment
set NODE_ENV=production && npm start



Create Basic Set up and Stucture
Project
	server
		config
			index.js
		index.js
		routes
			speakers
			index.js
		views
			layout
				index.pug
			error.pug
			index.pug
	public
		



Express Router
// Allows you to set up the folder structure to match the routes

const router = express.Router();


module.export = () => {
	router.get('/', (req, res, next) => {
		return res.send('index');
	})
	router.use('/speakers', routes());
	return router
}


Pulling in Static files 
CSS<JS<HTML (static middlware)

Templates
PUG - JADE 
gotcha: doesn't handel line wraps
HTML to pug converter


doctype html
html(lang='en')
  h1.class#id(name='hi')
    | This is some text, hello there,
    = name


Errors
$ npm -i http-errors

Creating PUG components
	block <COMPONENT NAME>
	extends <PATHNAME>

Working with Template variables

return. res.render('error', {
	page: 'error',
	title: "You got an error"
})


