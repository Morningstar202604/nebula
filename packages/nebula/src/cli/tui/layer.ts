import { run as runTui, type TuiInput } from "@nebula-ai/tui"
import { Global } from "@nebula-ai/core/global"
import { AppNodeBuilder } from "@nebula-ai/core/effect/app-node-builder"
import { Effect } from "effect"

export function run(input: TuiInput) {
  return runTui(input).pipe(Effect.provide(AppNodeBuilder.build(Global.node)))
}
