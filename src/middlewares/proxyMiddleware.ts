import { createProxyMiddleware } from "http-proxy-middleware";

export const testProxy = createProxyMiddleware({
    target: "http://localhost:3000",
    changeOrigin: true,
})