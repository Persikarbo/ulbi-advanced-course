const path = require("path");
const resolver = require("postcss-import-resolver");

module.exports = {
  plugins: [
    [
      "postcss-import",
      {
        resolve: resolver({
          alias: {
            "@styles": path.resolve(__dirname, "src/app/styles")
          },
          modules: [ "node_modules" ]
        })
      }
    ],
    "postcss-mixins",
    "postcss-nested",
    "postcss-for",
    "postcss-preset-env"
  ]
};