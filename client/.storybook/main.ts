import type {StorybookConfig} from "@storybook/react-webpack5";
import path from "path";
import webpack from "webpack";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack",
        'storybook-addon-remix-react-router',
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require("postcss"),
                },
            },
        },
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    webpackFinal: async (config) => {
        config.resolve = {
            extensions: ['.ts', '.tsx', '.js'],
            preferAbsolute: true,
            modules: [path.resolve(__dirname, '..', 'node_modules')],
            mainFiles: ['index'],
            alias: {'@': path.resolve(__dirname, '..', 'src'), 'assets': path.resolve(__dirname, '..', 'src', 'shared', 'assets')}
        }

        const imageRule = config.module?.rules?.find(rule => {
            const test = (rule as { test: RegExp }).test

            if (!test) {
                return false
            }

            return test.test('.svg')
        }) as { [key: string]: any }

        imageRule.exclude = /\.svg$/

        config.module?.rules?.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })

        //@ts-ignore
        config.module.rules.push({
            test: /\.s(a|c)ss$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1, // We always need to apply postcss-loader before css-loader
                        modules: {
                            auto: /\.module\.scss$/, // true
                            localIdentName: "[name]__[local]--[hash:base64:5]",
                        },
                    },
                },
                {
                    loader: "postcss-loader", // required for tailwind
                    options: {
                        implementation: require("postcss"), // postcss 8
                        postcssOptions: {
                            config: path.resolve(__dirname, "../postcss.config.cjs"),
                        },
                    },
                },
                {
                    loader: "sass-loader",
                    options: {
                        // sourceMap: true,
                        implementation: require("sass"), // dart sass
                    },
                },
            ],
        });

        return config;
    },
};

export default config