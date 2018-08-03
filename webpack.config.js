const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }, {
            enforce: 'pre',
            test: /\.js$/,
            loader: "source-map-loader"
        },
        {
            enforce: 'pre',
            test: /\.tsx?$/,
            use: "source-map-loader"
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        open: true,
        historyApiFallback: true,
        compress: true,
        overlay: {
            warnings: true,
            errors: true,
        },
        stats: {
            colors: true
        },
        port: 3001
    }

}