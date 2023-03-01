import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildResolve} from "./buildResolve";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {paths, mode, isDev} = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		resolve: buildResolve(),
		module: {
			rules: buildLoaders(),
		},
		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev? buildDevServer(options): undefined,
	}
}