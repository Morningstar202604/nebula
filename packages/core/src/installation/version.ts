declare global {
  const NEBULA_VERSION: string
  const NEBULA_CHANNEL: string
}

export const InstallationVersion = typeof NEBULA_VERSION === "string" ? NEBULA_VERSION : "local"
export const InstallationChannel = typeof NEBULA_CHANNEL === "string" ? NEBULA_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
