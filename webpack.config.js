//entry->output/

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env ==='production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    
    console.log('env', env);
    return {
        entry: './src/app.js', //we tell webpack where it should start//
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test:/\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                          loader: 'css-loader',
                          options: {
                              sourceMap: true
                          }  
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMAp: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', //tracks and shows our bugs position
        devServer:{
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/dist/'
        }
    }
};

//console.log(path.join(__dirname, 'public'));
