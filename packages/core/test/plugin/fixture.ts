import { AgentV2 } from "@nebula-ai/core/agent"
import { AISDK } from "@nebula-ai/core/aisdk"
import { Catalog } from "@nebula-ai/core/catalog"
import { CommandV2 } from "@nebula-ai/core/command"
import { Credential } from "@nebula-ai/core/credential"
import { AppNodeBuilder } from "@nebula-ai/core/effect/app-node-builder"
import { LayerNodePlatform } from "@nebula-ai/core/effect/app-node-platform"
import { LayerNode } from "@nebula-ai/core/effect/layer-node"
import { EventV2 } from "@nebula-ai/core/event"
import { FileSystem } from "@nebula-ai/core/filesystem"
import { FSUtil } from "@nebula-ai/core/fs-util"
import { Integration } from "@nebula-ai/core/integration"
import { Location } from "@nebula-ai/core/location"
import { Npm } from "@nebula-ai/core/npm"
import { PluginV2 } from "@nebula-ai/core/plugin"
import { Reference } from "@nebula-ai/core/reference"
import { SkillV2 } from "@nebula-ai/core/skill"
import { Effect, Layer } from "effect"
import { tempLocationLayer } from "../fixture/location"

const npmLayer = Layer.succeed(
  Npm.Service,
  Npm.Service.of({
    add: () => Effect.succeed({ directory: "", entrypoint: undefined }),
    install: () => Effect.void,
    which: () => Effect.succeed(undefined),
  }),
)

export const PluginTestLayer = AppNodeBuilder.build(
  LayerNode.group([
    FileSystem.node,
    FSUtil.node,
    Location.node,
    Npm.node,
    Credential.node,
    EventV2.node,
    LayerNodePlatform.httpClient,
    PluginV2.node,
    AgentV2.node,
    AISDK.node,
    Catalog.node,
    CommandV2.node,
    Integration.node,
    Reference.node,
    SkillV2.node,
  ]),
  [
    [Location.node, tempLocationLayer],
    [Npm.node, npmLayer],
  ],
)
