import { registerCustomTheme } from "@pierre/diffs"
import { NebulaTheme } from "./marked-theme"

let registered = false

export function registerNebulaTheme() {
  if (registered) return
  registered = true
  registerCustomTheme("Nebula", () => Promise.resolve(NebulaTheme))
}
