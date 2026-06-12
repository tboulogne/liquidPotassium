import { buildJsonPluginConfigSchema, definePluginEntry, type OpenClawPluginDefinition } from "openclaw/plugin-sdk/plugin-entry";

import { createInfomaniakOpenClawTools, InfomaniakPluginConfigJsonSchema, resolveInfomaniakPluginConfig } from "../src/openclaw/infomaniak-tools.js";

const infomaniakOpenClawPlugin: OpenClawPluginDefinition = definePluginEntry({
  id: "infomaniak",
  name: "Infomaniak",
  description: "Domain-oriented Infomaniak API tools backed by the liquid-potassium TypeScript SDK.",
  configSchema: buildJsonPluginConfigSchema(InfomaniakPluginConfigJsonSchema),
  register(api) {
    const config = resolveInfomaniakPluginConfig(api.pluginConfig);
    for (const tool of createInfomaniakOpenClawTools({ config, fetch: globalThis.fetch })) {
      api.registerTool(tool);
    }
  },
});

export default infomaniakOpenClawPlugin;
