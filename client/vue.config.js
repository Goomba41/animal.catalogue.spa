module.exports = {
    devServer: {
        host: "0.0.0.0",
        public: "0.0.0.0:8080",
        proxy: {
            "/api":{
                target: "http://192.168.0.105/API/v0",
                changeOrigin: true,
                pathRewrite:{
                    '^/api':""
                }
            }
        }
    }
}