var path = require('path');

module.exports = {
    entry: './js/aws.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    }
};