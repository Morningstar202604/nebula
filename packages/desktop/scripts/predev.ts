import { $ } from "bun"
import { downloadCliToResources } from "./utils"

await $`bun run install-electron`

await $`bun ./scripts/copy-icons.ts ${process.env.NEBULA_CHANNEL ?? "dev"}`

await $`cd ../nebula && bun script/build-node.ts`
await downloadCliToResources()
