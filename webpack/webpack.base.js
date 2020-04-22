const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};
const base = {
  entry: "../src/main.js",
  output: {
    path: resolve("../dist"),
    fileName: "bunble.js",
  },
  module:{
      rules:[

      ]
  },
  plugins:[]
};

module.exports = base;
