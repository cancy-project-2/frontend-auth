const { EnvironmentPlugin } = require("webpack");
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
      importMap: {
        imports: {
          "@cancy-project/auth-helper": "http://localhost:8080/cancy-project-auth-helper.js"
        }
      },
    },
  });

  return merge(defaultConfig, {
    externals: [
      "react",
      "react-dom",
      "single-spa", /^@cancy-project\//
    ],
    plugins: [
      new EnvironmentPlugin(['GITHUB_CLIENT_ID'])
    ],
  });
};
