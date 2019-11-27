const path = require('path');
const configs = [{
    entry: {
        index: path.resolve(__dirname, "src/index.ts")
    },
    output: {
        path: path.resolve(__dirname, 'es2015'),
        libraryTarget: "window",
        library: "LogicalCompare",
        filename: "index.js",
    }
}];
module.exports = [...configs.map(
    (config) => ({
        ...config,
        module: {
            rules: [
                {
                    test: /\.(ts)$/,
                    resolve: {
                        extensions: ['.ts', '.js', '.json']
                    },
                    exclude: /(node_modules|bower_components)/,
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.es2015.json"
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader", // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader'
                },
                {
                    test: /\.css$/,
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                },
                {
                    // Capture eot, ttf, woff, and woff2
                    test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: "url-loader"
                },
                {
                    test: /\.(jpg|gif|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: "url-loader"
                }
            ]
        }
    })
)];
