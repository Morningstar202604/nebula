import { Config } from "effect"

export function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

const copy = process.env["NEBULA_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
const fff = process.env["NEBULA_DISABLE_FFF"]

function enabledByExperimental(key: string) {
  return process.env[key] === undefined ? truthy("NEBULA_EXPERIMENTAL") : truthy(key)
}

export const Flag = {
  OTEL_EXPORTER_OTLP_ENDPOINT: process.env["OTEL_EXPORTER_OTLP_ENDPOINT"],
  OTEL_EXPORTER_OTLP_HEADERS: process.env["OTEL_EXPORTER_OTLP_HEADERS"],

  NEBULA_AUTO_HEAP_SNAPSHOT: truthy("NEBULA_AUTO_HEAP_SNAPSHOT"),
  NEBULA_GIT_BASH_PATH: process.env["NEBULA_GIT_BASH_PATH"],
  NEBULA_CONFIG: process.env["NEBULA_CONFIG"],
  NEBULA_CONFIG_CONTENT: process.env["NEBULA_CONFIG_CONTENT"],
  NEBULA_DISABLE_AUTOUPDATE: truthy("NEBULA_DISABLE_AUTOUPDATE"),
  NEBULA_ALWAYS_NOTIFY_UPDATE: truthy("NEBULA_ALWAYS_NOTIFY_UPDATE"),
  NEBULA_DISABLE_PRUNE: truthy("NEBULA_DISABLE_PRUNE"),
  NEBULA_DISABLE_TERMINAL_TITLE: truthy("NEBULA_DISABLE_TERMINAL_TITLE"),
  NEBULA_SHOW_TTFD: truthy("NEBULA_SHOW_TTFD"),
  NEBULA_DISABLE_AUTOCOMPACT: truthy("NEBULA_DISABLE_AUTOCOMPACT"),
  NEBULA_DISABLE_MODELS_FETCH: truthy("NEBULA_DISABLE_MODELS_FETCH"),
  NEBULA_DISABLE_MOUSE: truthy("NEBULA_DISABLE_MOUSE"),
  NEBULA_FAKE_VCS: process.env["NEBULA_FAKE_VCS"],
  NEBULA_SERVER_PASSWORD: process.env["NEBULA_SERVER_PASSWORD"],
  NEBULA_SERVER_USERNAME: process.env["NEBULA_SERVER_USERNAME"],
  NEBULA_DISABLE_FFF: fff === undefined ? process.platform === "win32" : truthy("NEBULA_DISABLE_FFF"),

  // Experimental
  NEBULA_EXPERIMENTAL_FILEWATCHER: Config.boolean("NEBULA_EXPERIMENTAL_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  NEBULA_EXPERIMENTAL_DISABLE_FILEWATCHER: Config.boolean("NEBULA_EXPERIMENTAL_DISABLE_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  NEBULA_EXPERIMENTAL_DISABLE_COPY_ON_SELECT:
    copy === undefined ? process.platform === "win32" : truthy("NEBULA_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"),
  NEBULA_MODELS_URL: process.env["NEBULA_MODELS_URL"],
  NEBULA_MODELS_PATH: process.env["NEBULA_MODELS_PATH"],
  NEBULA_DB: process.env["NEBULA_DB"],

  NEBULA_WORKSPACE_ID: process.env["NEBULA_WORKSPACE_ID"],
  NEBULA_EXPERIMENTAL_WORKSPACES: enabledByExperimental("NEBULA_EXPERIMENTAL_WORKSPACES"),

  // Evaluated at access time (not module load) because tests, the CLI, and
  // external tooling set these env vars at runtime.
  get NEBULA_DISABLE_PROJECT_CONFIG() {
    return truthy("NEBULA_DISABLE_PROJECT_CONFIG")
  },
  get NEBULA_EXPERIMENTAL_REFERENCES() {
    return enabledByExperimental("NEBULA_EXPERIMENTAL_REFERENCES")
  },
  get NEBULA_TUI_CONFIG() {
    return process.env["NEBULA_TUI_CONFIG"]
  },
  get NEBULA_CONFIG_DIR() {
    return process.env["NEBULA_CONFIG_DIR"]
  },
  get NEBULA_PURE() {
    return truthy("NEBULA_PURE")
  },
  get NEBULA_PERMISSION() {
    return process.env["NEBULA_PERMISSION"]
  },
  get NEBULA_PLUGIN_META_FILE() {
    return process.env["NEBULA_PLUGIN_META_FILE"]
  },
  get NEBULA_CLIENT() {
    return process.env["NEBULA_CLIENT"] ?? "cli"
  },
}
