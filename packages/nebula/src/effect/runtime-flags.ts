import { Config, ConfigProvider, Context, Effect, Layer, Option } from "effect"
import { ConfigService } from "@/effect/config-service"

const bool = (name: string) => Config.boolean(name).pipe(Config.withDefault(false))
const positiveInteger = (name: string) =>
  Config.number(name).pipe(
    Config.map((value) => (Number.isInteger(value) && value > 0 ? value : undefined)),
    Config.orElse(() => Config.succeed(undefined)),
  )
const experimental = bool("NEBULA_EXPERIMENTAL")
const enabledByExperimental = (name: string) =>
  Config.all({ experimental, enabled: Config.boolean(name).pipe(Config.option) }).pipe(
    Config.map((flags) => Option.getOrElse(flags.enabled, () => flags.experimental)),
  )

export class Service extends ConfigService.Service<Service>()("@nebula/RuntimeFlags", {
  autoShare: bool("NEBULA_AUTO_SHARE"),
  pure: bool("NEBULA_PURE"),
  disableDefaultPlugins: bool("NEBULA_DISABLE_DEFAULT_PLUGINS"),
  disableEmbeddedWebUi: bool("NEBULA_DISABLE_EMBEDDED_WEB_UI"),
  disableExternalSkills: bool("NEBULA_DISABLE_EXTERNAL_SKILLS"),
  disableLspDownload: bool("NEBULA_DISABLE_LSP_DOWNLOAD"),
  disableClaudeCodePrompt: Config.all({
    broad: bool("NEBULA_DISABLE_CLAUDE_CODE"),
    direct: bool("NEBULA_DISABLE_CLAUDE_CODE_PROMPT"),
  }).pipe(Config.map((flags) => flags.broad || flags.direct)),
  disableClaudeCodeSkills: Config.all({
    broad: bool("NEBULA_DISABLE_CLAUDE_CODE"),
    direct: bool("NEBULA_DISABLE_CLAUDE_CODE_SKILLS"),
  }).pipe(Config.map((flags) => flags.broad || flags.direct)),
  enableExa: Config.all({
    experimental,
    enabled: bool("NEBULA_ENABLE_EXA"),
    legacy: bool("NEBULA_EXPERIMENTAL_EXA"),
  }).pipe(Config.map((flags) => flags.experimental || flags.enabled || flags.legacy)),
  enableParallel: Config.all({
    enabled: bool("NEBULA_ENABLE_PARALLEL"),
    legacy: bool("NEBULA_EXPERIMENTAL_PARALLEL"),
  }).pipe(Config.map((flags) => flags.enabled || flags.legacy)),
  enableExperimentalModels: bool("NEBULA_ENABLE_EXPERIMENTAL_MODELS"),
  enableQuestionTool: bool("NEBULA_ENABLE_QUESTION_TOOL"),
  experimentalReferences: enabledByExperimental("NEBULA_EXPERIMENTAL_REFERENCES"),
  experimentalBackgroundSubagents: enabledByExperimental("NEBULA_EXPERIMENTAL_BACKGROUND_SUBAGENTS"),
  experimentalLspTy: bool("NEBULA_EXPERIMENTAL_LSP_TY"),
  experimentalLspTool: enabledByExperimental("NEBULA_EXPERIMENTAL_LSP_TOOL"),
  experimentalOxfmt: enabledByExperimental("NEBULA_EXPERIMENTAL_OXFMT"),
  experimentalPlanMode: enabledByExperimental("NEBULA_EXPERIMENTAL_PLAN_MODE"),
  experimentalCodeMode: enabledByExperimental("NEBULA_EXPERIMENTAL_CODE_MODE"),
  experimentalEventSystem: enabledByExperimental("NEBULA_EXPERIMENTAL_EVENT_SYSTEM"),
  experimentalWorkspaces: enabledByExperimental("NEBULA_EXPERIMENTAL_WORKSPACES"),
  experimentalIconDiscovery: enabledByExperimental("NEBULA_EXPERIMENTAL_ICON_DISCOVERY"),
  outputTokenMax: positiveInteger("NEBULA_EXPERIMENTAL_OUTPUT_TOKEN_MAX"),
  bashDefaultTimeoutMs: positiveInteger("NEBULA_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS"),
  experimentalNativeLlm: bool("NEBULA_EXPERIMENTAL_NATIVE_LLM"),
  experimentalWebSockets: bool("NEBULA_EXPERIMENTAL_WEBSOCKETS"),
  client: Config.string("NEBULA_CLIENT").pipe(Config.withDefault("cli")),
}) {}

export type Info = Context.Service.Shape<typeof Service>

const emptyConfigLayer = Service.layer.pipe(
  Layer.provide(ConfigProvider.layer(ConfigProvider.fromUnknown({}))),
  Layer.orDie,
)

export const layer = (overrides: Partial<Info> = {}) =>
  Layer.effect(
    Service,
    Effect.gen(function* () {
      const flags = yield* Service
      return Service.of({ ...flags, ...overrides })
    }),
  ).pipe(Layer.provide(emptyConfigLayer))

export const node = LayerNode.make({ service: Service, layer: Service.layer.pipe(Layer.orDie), deps: [] })

export * as RuntimeFlags from "./runtime-flags"
import { LayerNode } from "@nebula-ai/core/effect/layer-node"
