const path = require("path");

const config = {
    entry: path.resolve(__dirname, "./src/index.js"),
    mode: "production",
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "react-babylon-3d.js",
        library: "ReactBabylon3D",
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    externals: {
        babylonjs: {
            commonjs: "BABYLON",
            commonjs2: "BABYLON",
            amd: "BABYLON",
            root: "BABYLON",
        },
        react: "react",
        "react-reconciler": "react-reconciler",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        modules: [path.resolve("./node_modules"), path.resolve("./src")],
        extensions: [".json", ".js"],
    },
};

module.exports = config;
