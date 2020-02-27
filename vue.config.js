// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            new webpack.NormalModuleReplacementPlugin(/(.*)MOCK(\.*)/, function(
                resource
            ) {
                const suffix =
                    process.env.VUE_APP_MOCK === 'true' ? 'Mock' : '';
                resource.request = resource.request.replace(/MOCK/, suffix);
            })
        ]
    }
};
