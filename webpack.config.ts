import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    // mode: 'production',
    mode: 'development',

    entry: path.resolve(__dirname, 'src', 'index.ts'),

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
        rules: [
            {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/,},
            {test: /\.css$/, use: ['style-loader', 'css-loader'],},
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new webpack.ProgressPlugin(),
    ]
}

export default config;