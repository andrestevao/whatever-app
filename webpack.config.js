const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
       rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties'
                ]
            }

        },
       },
           {
               test: /\.css$/,
               exclude: /node_modules/,
               use: [
                   'style-loader',
                   'css-loader',
                   {
                       loader: 'postcss-loader',
                       options: {
                           ident: 'postcss',
                           plugins: [
                               require('tailwindcss'),
                               require('autoprefixer')
                           ]
                       }
                   }
               ]
           }
       ] 
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
