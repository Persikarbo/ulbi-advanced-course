import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import SVGSpriteLoaderPlugin from "svg-sprite-loader/plugin";

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {

    const prodPlugins = [
        new BundleAnalyzerPlugin()
    ]

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash:8].css",
            chunkFilename: "styles/[name].[contenthash:8].css"
        }),
        new webpack.ProgressPlugin(),
        // @ts-ignore
        new SVGSpriteLoaderPlugin({ plainSprite: true }),
        ...isDev ? [] : prodPlugins
    ]
}