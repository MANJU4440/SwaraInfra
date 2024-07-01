// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/completed',
        createProxyMiddleware({
            target: 'https://project-akshay.onrender.com',
            changeOrigin: true,
        })
    );
    app.use(
        '/ongoing',
        createProxyMiddleware({
            target: 'https://project-akshay.onrender.com',
            changeOrigin: true,
        })
    );
};
