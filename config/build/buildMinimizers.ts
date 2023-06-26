import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export function buildMinimizers(): webpack.WebpackPluginInstance[] {

    return [
        new TerserPlugin({
            extractComments: false
        }),
        new CssMinimizerPlugin()
    ]
}