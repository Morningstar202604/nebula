import { Context } from "effect"
import type { InstanceContext } from "@/project/instance-context"
import type { WorkspaceV2 } from "@nebula-ai/core/workspace"

export const InstanceRef = Context.Reference<InstanceContext | undefined>("~nebula/InstanceRef", {
  defaultValue: () => undefined,
})

export const WorkspaceRef = Context.Reference<WorkspaceV2.ID | undefined>("~nebula/WorkspaceRef", {
  defaultValue: () => undefined,
})
