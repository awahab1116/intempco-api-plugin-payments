import pkg from "../package.json";
import i18n from "./i18n/index.js";
import mutations from "./mutations/index.js";
import queries from "./queries/index.js";
import { registerPluginHandlerForPayments } from "./registration.js";
import resolvers from "./resolvers/index.js";
import schemas from "./schemas/index.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  console.log("Payments plugin linked");
  await app.registerPlugin({
    label: "Payments",
    name: "payments",
    version: pkg.version,
    i18n,
    functionsByType: {
      registerPluginHandler: [registerPluginHandlerForPayments],
    },
    graphQL: {
      resolvers,
      schemas,
    },
    queries,
    mutations,
  });
}
