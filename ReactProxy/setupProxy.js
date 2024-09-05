const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/tag" /* this is the portion that you add to the URL on the connected, so it is replaced by the actual url later */,
    createProxyMiddleware({
      target:
        "https://targeturl.com" /* this is the actual url that you want to connect to */,
      changeOrigin: true,
      pathRewrite: {
        "^/api/tag": "", /* this can be anything, it is just a placeholder */
      },
    })
  );
};
