import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default ({
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: [
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
        chunkFilename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                sideEffects: false,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(mp4)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            },
            {
                test: /\.(gif|png|jpg|svg|ico)$/i,
                exclude: /fonts/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 80
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 80
                            }
                        }
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/i,
                exclude: /images/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                },
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new CopyPlugin({
            patterns: [
                { from: '../_redirects', to: '../dist' },
                { from: '../favicon.ico', to: '../dist' }
            ],
            options: {
                concurrency: 100,
            }
        }),
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.DefinePlugin({
            SC_DISABLE_SPEEDY: true
        })
    ].filter(n => n),
    optimization: {
        usedExports: true,
        minimizer: [
            new TerserPlugin()
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                react: {
                    name: 'react',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                },
                material: {
                    name: 'styled-components',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]styled-components[\\/]/,
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'async',
                    reuseExistingChunk: true,
                    enforce: true
                },
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
});