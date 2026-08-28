const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://nebula.ai" : `https://${stage}.nebula.ai`,
  console: stage === "production" ? "https://nebula.ai/auth" : `https://${stage}.nebula.ai/auth`,
  email: "help@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/Morningstar202604/nebula",
  discord: "https://nebula.ai/discord",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/docs/" },
  ],
}
