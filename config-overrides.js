// devServer: {
// ...
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
//             "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
//     }
// }

/* config-overrides.js */

module.exports = {
    webpack: function(config, env) {
        // ...add your webpack config
        console.log(config)
        config.devServer = {}
        config.devServer.headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }


        return config;
    },
}

module.exports = {
    webpack: function (config, env) {
        return config;
    },
    jest: function (config) {
        return config;
    },
    devServer: function (configFunction) {
        return function (proxy, allowedHost) {
            return {
                ...configFunction(proxy, allowedHost),
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
                }
            };
        };
    },
    paths: function (paths, env) {
        return paths;
    },
}
