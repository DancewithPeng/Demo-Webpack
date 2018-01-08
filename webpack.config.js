
// webpack 配置文件，这里是js模块

module.exports = {
    entry: __dirname + "/source/main.js",   // 入口文件
    output: {                               // 输出文件
        path: __dirname + "/build",         // 输出文件夹
        filename: "main-release.js"         // 输出文件名
    },

    // devtool选项可以生成方便调试的对应代码，开发阶段可以打开，发布阶段建议取消
    devtool: "eval-source-map", // source-map, cheap-module-source-map, eval-source-map, cheap-module-eval-source-map 4选1    
    
    // devServer 配置了webpack-dev-server的配置
    devServer: {
        contentBase: "./build",     // 内容文件夹
        historyApiFallback: true,   // h5 history的新API，不让页面跳转
        inline: true,               // 实时刷新
        port: 8080,                 // 端口，默认8080
    },

    // Loaders webpack处理不同的文件，可以设置调用不同的脚本或者工具去处理
    module: {

        // 文件处理规则，规则数组
        rules: [
            {
                test: /(\.jsx|\.js)$/,      // 要处理的文件
                use: {                      // 调用的脚本或者工具    
                    loader: "babel-loader", // 脚本或工具

                    // babel的设置可以放在.babelrc文件中，.babelrc文件为JSON格式，wabpack会自动调用这个配置文件
                    // options: { 
                    //     presets: [          // 调用脚本预设的参数
                    //         "env",
                    //         "react"
                    //     ],
                    // },
                },
                exclude: /node_modules/,    // 额外包含
            },
            {
                test: /\.css$/,

                // 同一个文件规则，使用多个loader
                use: [
                    {
                        loader: "style-loader"
                    }, 
                    {
                        loader: "css-loader"
                    },             
                ]
            }
        ]
    }
};