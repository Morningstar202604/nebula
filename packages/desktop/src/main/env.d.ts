interface ImportMetaEnv {
  readonly NEBULA_CHANNEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "virtual:nebula-server" {
  export namespace Server {
    export const listen: typeof import("../../../nebula/dist/types/src/node").Server.listen
    export type Listener = import("../../../nebula/dist/types/src/node").Server.Listener
  }
  export namespace Config {
    export const get: typeof import("../../../nebula/dist/types/src/node").Config.get
    export type Info = import("../../../nebula/dist/types/src/node").Config.Info
  }
  export const bootstrap: typeof import("../../../nebula/dist/types/src/node").bootstrap
}
