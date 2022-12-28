const hwp = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",

    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },

    entry: path.join(__dirname, "src", "index.js"),

    module: {
        rules:[
            {
                test:/\.js$/,
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/preset-react']
                }
            }
        ]
    },
    plugins:[
     new hwp({
        template:"index.html"
     })   
    ]
}