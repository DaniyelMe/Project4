let app = require('../index');
let ejs = require('ejs');
let path = require('path');

app.get('/', (req, res) => {
	let data = {
		title: 'Login',
	};

	ejs.renderFile(path.resolve(__dirname, '../templates/index.ejs'), data, function (err, renderedTemplate) {
		if (err) throw err;
		res.send(renderedTemplate);
	});
});
