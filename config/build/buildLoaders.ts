import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";
import path from "path";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

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
                            ? "[path][name]__[local]--[hash:base64:4]"
                            : "[hash:base64:8]"
                    },
                }
            },
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        config: path.resolve("postcss.config.js"),
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

    return [
        typeScriptLoader,
        cssLoader
    ]
}