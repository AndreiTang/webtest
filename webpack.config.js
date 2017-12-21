module.exports={
    devtool: 'source-map',
    entry: __dirname + "/app/main.js",
    output:{
        path:__dirname + "/public",
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:"babel-loader",
                query:{
                    presets:['env','react']
                }
            },
            {
                test:'/\.css$/',
                loader: "style-loader!css-loader?modules"
            }
        ]
    },

    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    } 
}

