/// <reference path="../markdown.d.ts" />

export * as SkillPlugin from "./skill"

import { define } from "./internal"
import { Effect } from "effect"
import { AbsolutePath } from "../schema"
import { SkillV2 } from "../skill"
import customizeNebulaContent from "./skill/customize-nebula.md" with { type: "text" }

export const CustomizeNebulaContent = customizeNebulaContent

export const Plugin = define({
  id: "skill",
  effect: Effect.fn(function* (ctx) {
    yield* ctx.skill.transform((draft) => {
      draft.source(
        SkillV2.EmbeddedSource.make({
          type: "embedded",
          skill: SkillV2.Info.make({
            name: "customize-nebula",
            description:
              "Use ONLY when the user is editing or creating nebula's own configuration: nebula.json, nebula.jsonc, files under .nebula/, or files under ~/.config/nebula/. Also use when creating or fixing nebula agents, subagents, commands, skills, plugins, MCP servers, or permission rules. Do not use for the user's own application code, or for any project that is not configuring nebula itself.",
            location: AbsolutePath.make("/builtin/customize-nebula.md"),
            content: CustomizeNebulaContent,
          }),
        }),
      )
    })
  }),
})
