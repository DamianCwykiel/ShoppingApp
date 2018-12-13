//entry->output/

const path = require('path');

//console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/app.js', //we tell webpack where it should start//
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test:/\.s?css$/,//? = and (css & scss)
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', //tracks and shows our bugs position
    devServer:{
        contentBase: path.join(__dirname, 'public')
    }
};