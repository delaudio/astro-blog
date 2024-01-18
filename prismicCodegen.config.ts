import type { Config } from "prismic-ts-codegen";

require("dotenv").config();

const repositoryName = process.env.PRISMIC_REPOSITORY;
const customTypesAPIToken = process.env.PRISMIC_CUSTOM_TYPES_TOKEN;

const config: Config = {
  output: "./src/prismic.types.generated.ts",
  repositoryName,
  customTypesAPIToken,
  models: {
    fetchFromRepository: true,
  },
};

export default config;
