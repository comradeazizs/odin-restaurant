const path = require("path");

module.exports = {
   mode: "development",
   entry: "./src/index.js",
   output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist")
      // clean: true
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: "asset/resource"
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource"
         }
      ]
   },
   devtool: "inline-source-map",
   devServer: {
      static: {
         directory: path.join(__dirname, "./dist")
      },
      compress: true,
      open: true,
      port: 9000
   }
};
