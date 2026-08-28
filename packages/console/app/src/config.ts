/**
 * Application-wide constants and configuration
 */
export const config = {
  // Base URL
  baseUrl: "https://nebula.ai",

  // GitHub
  github: {
    repoUrl: "https://github.com/Morningstar202604/nebula",
    starsFormatted: {
      compact: "195K",
      full: "195,000",
    },
  },

  // Social links
  social: {
    twitter: "https://x.com/nebula",
    discord: "https://discord.gg/nebula",
  },

  // Static stats (used on landing page)
  stats: {
    contributors: "950",
    commits: "13,000",
    monthlyUsers: "16M",
  },
} as const
