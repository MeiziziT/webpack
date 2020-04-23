const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};
const base = {
  // mode:'development',
  entry:resolve("../src/index.js") ,
  output: {
    path: resolve("../dist/"),
    filename: 'bundle.js',
  },
  // module:{
  //     rules:[
  //       {
  //         test:/\.ts$/,
  //         use:'ts-loader'
  //       },
  //       {
  //         test:/\.css$/,
  //         use:[
  //           {
  //             loader:'style-loader'
  //           },
  //           {
  //             loader:'css-loader',
  //             options:{
  //               modules:true
  //             }
  //           },
  //         ]
  //       }
  //     ]
  // },
  // plugins:[]
};

module.exports = base;
