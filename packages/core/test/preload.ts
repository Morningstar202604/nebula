import path from "path"

process.env.NEBULA_DB = ":memory:"
process.env.NEBULA_MODELS_PATH = path.join(import.meta.dir, "plugin", "fixtures", "models-dev.json")
process.env.NEBULA_DISABLE_MODELS_FETCH = "true"
