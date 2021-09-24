module.exports = {
  sourceDirectory: "src",
  buildDirectory: "build",
  rules: [
    {
      match: /\.sn\.js$/,
      plugins: [
        {
          name: "@sincronia/babel-plugin",
          options: {
            plugins: ["@sincronia/remove-modules"],
            presets: [
              "@sincronia/servicenow",
              [
                "@babel/env",
                {
                  useBuiltIns: "entry",
                  targets: { ie: "10" },
                  corejs: {
                    version: 3,
                  },
                },
              ],
            ],
          },
        },
      ],
    },
    {
      match: /\.sn\.ts$/,
      plugins: [
        {
          name: "@sincronia/typescript-plugin",
          options: {
            transpile: false,
          },
        },
        {
          name: "@sincronia/babel-plugin",
          options: {
            plugins: [
              "@sincronia/remove-modules",
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread",
            ],
            presets: [
              "@sincronia/servicenow",
              [
                "@babel/env",
                {
                  useBuiltIns: "entry",
                  targets: { ie: "10" },
                  corejs: {
                    version: 3,
                  },
                },
              ],
              "@babel/typescript",
            ],
          },
        },
      ],
    },
  ],
  excludes: {},
  includes: {},
  tableOptions: {},
  refreshInterval: 30,
};
