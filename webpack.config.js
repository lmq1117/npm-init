const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module:{
        rules:[
            // {test:/\.vue$/,use:'vue-loader'},
            // {test:/\.css$/,use:['style-loader','css-loader']}

            // {
            //     test:/\.vue$/,
            //     loader:'vue-loader',
            //     options: {
            //         loaders:{
            //             css:ExtractTextWebapckPlugin.extract({ use: 'css-loader' })
            //         }
            //     }
            // }

            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        css: ExtractTextWebapckPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextWebapckPlugin('style.css')
    ]
}