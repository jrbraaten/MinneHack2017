var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();
var reactExpressMiddleware = require('react-express-middleware');
var compiler = webpack(webpackConfig);
var storage = require('node-persist');

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

var curDay = null;
var taken = null;
var combo = [];
app.all('/secret/:day/:taken', function(req, res) {
    var day = req.param('day');
    var taken2 = req.param('taken');
    if(day < 0 || day > 31) {
        res.send("No can do compadre, you put in an invalid date");
    } else {
        res.send(day + "\n");
        curDay = day;
        taken = taken2;
        combo = [curDay, taken];
        console.log("finished")
    }

});

app.get('/request', function(req,res) {
    res.send(combo);
})

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
