process.traceDeprecation = true;
const mf_config = require("@patternslib/dev/webpack/webpack.mf");
const package_json = require("./package.json");
const package_json_mockup = require("@plone/mockup/package.json");
const package_json_patternslib = require("@patternslib/patternslib/package.json");
const path = require("path");
const webpack_config = require("@patternslib/dev/webpack/webpack.config").config;

module.exports = () => {
    let config = {
        entry: {
            "datepickerpattern.min": path.resolve(__dirname, "resources/index.js"),
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.(?:sass|scss|css)$/i,
                    use: [
                        {
                            loader: "style-loader",
                            options: {
                                insert: require.resolve("@patternslib/dev/webpack/style-inserter"),
                            },
                        },
                        "css-loader",
                        "sass-loader",
                    ],
                },
            ],
        },
    };

    config = webpack_config({
        config: config,
        package_json: package_json,
    });
    config.output.path = path.resolve(__dirname, "src/collective/datepickerpattern/browser/static/bundles");
    config.resolve.alias["pickadate"] = path.resolve(
        __dirname,
        "node_modules/pickadate"
    );
    config.resolve.extensions = ['.js', '.jsx', '.json'];

    config.plugins.push(
        mf_config({
            name: "datepickerpattern",
            filename: "datepickerpattern-remote.min.js",
            remote_entry: config.entry["datepickerpattern.min"],
            dependencies: {
                ...package_json_patternslib.dependencies,
                ...package_json_mockup.dependencies,
                ...package_json.dependencies,
            },
        })
    );

    if (process.env.NODE_ENV === "development") {
        config.devServer.port = "3001";
        config.devServer.static.directory = path.resolve(__dirname, "./resources/");
        config.devServer.headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }

    // console.log(JSON.stringify(config, null, 4));

    return config;
};
