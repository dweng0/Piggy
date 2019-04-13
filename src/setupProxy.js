const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.get('/api/my/transaction-tags')
    app.use(proxy('/api', {
        target: "https://api-sandbox.starlingbank.com/api/v1/accounts",
        auth: "Bearer Mz771awWpCZfDbBGR99MYc81RSNXvnG0wbBUN4faJ5tigdnBxe0NpBKpdj0iXeKF",
        changeOrigin: true,
        logLevel: 'debug',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }))
}
