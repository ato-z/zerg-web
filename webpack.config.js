const path = require('path')
const root = path.resolve(__dirname, './')
const r = dir => path.resolve(root, dir)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const usePostcssLoader = {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          [
            require('postcss-nested'),
            "autoprefixer",
            {
              // Options
            },
          ],
        ],
      },
    },
}

module.exports = (env) => {

    return  {
    
        entry: './src/app.ts',
    
        output: {
            path: r('./dist'),
            filename: './js/[name]-[contenthash].js',
            clean: true
        },
    
        devServer: {
            static: r('./dist'),
            compress: false,
            port: 5001,
            hot: true
        },
    
        module: {
            rules: [
                {
                    test: /\.global\.css$/i,
                    exclude: /(node_modules|bower_components)/,
                    use: [ 'style-loader', 'css-loader', usePostcssLoader ]
                },
                {
                    test: /[^\.global]\.css$/i,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            },
                        },
                        usePostcssLoader
                    ]
                },
                {
                    test: /\.ts$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "swc-loader",
                        options: {
                            jsc: {
                                target: "es2016",
                                parser: {
                                    syntax: "typescript"
                                }
                            }
                        }
                    }
                }
            ]
        },
    
        plugins: [
            new MiniCssExtractPlugin({
                filename: "./css/[name].[contenthash].css",
            }),
            new HtmlWebpackPlugin({
                inject: 'body',
                template: './src/index.html'
            }),
        ]
    }
}
