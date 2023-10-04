import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";
import path from "path";

export function buildLoaders({ isDev, paths }: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader = {
        test: /\.(p)css$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\..*$/,
                        localIdentName: isDev
                            ? "[name]__[local]--[hash:base64:4]"
                            : "[hash:base64:8]"
                    },
                }
            },
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        config: path.resolve("postcss.config.js")
                    }
                }
            }
        ],
    }

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }

    const fontsLoader = {
        test: /\.(woff|woff2)$/i,
        type: "asset/resource",
        generator: {
            filename: "fonts/[hash][ext][query]"
        }
    }

    const iconsLoader = {
        test: /\.svg$/i,
        loader: "svg-sprite-loader",
        options: {
            extract: true
        }
    }

    const imagesLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
            filename: "images/[hash][ext][query]"
        }
    }

    return [
        typeScriptLoader,
        cssLoader,
        fontsLoader,
        iconsLoader,
        imagesLoader
    ]
}