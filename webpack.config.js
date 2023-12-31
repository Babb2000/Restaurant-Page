const path = require('path');

module.exports = {
  entry: './src/index.jms',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
 module: {
   rules: [
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader'],
     },
   ],
 },
};