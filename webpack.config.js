const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "cancy-project",
    projectName: "auth",
    webpackConfigEnv,
    argv,
    standaloneOptions: {
      appOrParcelName: "auth",
      importMapUrl: new URL("https://storage.googleapis.com/cancy-website-bucket/import/map.json"),
    },
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
