export * from "./client.js"
export * from "./server.js"

import { createNebulaClient } from "./client.js"
import { createNebulaServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createNebula(options?: ServerOptions) {
  const server = await createNebulaServer({
    ...options,
  })

  const client = createNebulaClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
