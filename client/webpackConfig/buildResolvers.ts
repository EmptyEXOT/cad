import webpack from "webpack";
import {Webpack} from "./types";
import Paths = Webpack.Paths;

export const buildResolvers = ({src, alias}: Paths): webpack.ResolveOptions => {
    return {
        extensions: ['.ts', '.tsx', '.js'],
        preferAbsolute: true,
        modules: [src, 'node_modules'],
        mainFiles: ['index'],
        alias: {'@': alias.src, 'assets': alias.assets},
    }
}