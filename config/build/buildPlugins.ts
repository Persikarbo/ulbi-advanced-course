import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash:8].css",
            chunkFilename: "styles/[name].[contenthash:8].css"
        }),
        new webpack.ProgressPlugin()
    ]
}