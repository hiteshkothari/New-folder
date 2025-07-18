import { defineConfig } from "cypress";

export default defineConfig({
  // component: {
  //   devServer: {
  //     framework: "angular",
  //     bundler: "webpack",
  //   },
  //   specPattern: "**/*.spec.ts",
  // },
  e2e: {
    baseUrl: "http://localhost:4200",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.ts",
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
