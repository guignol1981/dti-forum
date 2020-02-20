// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/(.*)MOCK(\.*)/, function(
        resource
      ) {
        const suffix = process.env.MOCK === "true" ? "Mock" : "";
        console.log(suffix);
        resource.request = resource.request.replace(/MOCK/, suffix);
      })
    ]
  }
};
