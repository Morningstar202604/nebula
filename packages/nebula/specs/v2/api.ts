// @ts-nocheck

import { Nebula } from "@nebula-ai/core"
import { ReadTool } from "@nebula-ai/core/tools"

const nebula = Nebula.make({})

nebula.tool.add(ReadTool)

nebula.tool.add({
  name: "bash",
  schema: {
    type: "object",
    properties: {
      command: {
        type: "string",
        description: "The command to run.",
      },
    },
    required: ["command"],
  },
  execute(input, ctx) {},
})

nebula.auth.add({
  provider: "openai",
  type: "api",
  value: process.env.OPENAI_API_KEY,
})

nebula.agent.add({
  name: "build",
  permissions: [],
  model: {
    id: "gpt-5-5",
    provider: "openai",
    variant: "xhigh",
  },
})

const sessionID = await nebula.session.create({
  agent: "build",
})

nebula.subscribe((event) => {
  console.log(event)
})

await nebula.session.prompt({
  sessionID,
  text: "hey what is up",
})

await nebula.session.prompt({
  sessionID,
  text: "what is up with this",
  files: [
    {
      mime: "image/png",
      uri: "data:image/png;base64,xxxx",
    },
  ],
})

await nebula.session.wait()

console.log(await nebula.session.messages(sessionID))
