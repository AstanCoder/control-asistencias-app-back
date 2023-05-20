"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testProxy = void 0;
const http_proxy_middleware_1 = require("http-proxy-middleware");
exports.testProxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: "http://localhost:3000",
    changeOrigin: true,
});
