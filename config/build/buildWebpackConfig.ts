import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";
import { buildMinimizers } from "./buildMinimizers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].bundle.js",
            path: paths.build,
            clean: true,
            publicPath: "/"
        },
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        optimization: {
            minimizer: buildMinimizers(),
            minimize: true
        },
    }
}