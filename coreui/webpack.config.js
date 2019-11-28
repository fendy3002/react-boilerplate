const path = require('path');
const configs = [{
    entry: {
        index: path.resolve(__dirname, "src/index.tsx")
    },
    output: {
        path: path.resolve(__dirname, 'bin'),
        libraryTarget: "window",
        library: "App",
        filename: "index.js",
    }
}];
module.exports = [...configs.map(
    (config) => ({
        ...config,
        module: {
            rules: [
                {
                    test: /\.(tsx)$/,
                    resolve: {
                        extensions: ['.tsx', '.ts', '.js', '.json']
                    },
                    exclude: /(node_modules|bower_components)/,
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.json"
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader", // creates style nodes from JS strings
                        {
                            loader: "css-loader", // translates CSS into CommonJS
                            query: {
                                modules: true
                            }
                        },
                        "sass-loader", // compiles Sass to CSS, using Node Sass by default
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
                        modules: true
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
