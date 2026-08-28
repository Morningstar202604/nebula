import { getComponentCatalogue } from "@opentui/solid/components"
import { registerSpinner } from "opentui-spinner/solid"

export function registerNebulaSpinner() {
  if (!getComponentCatalogue().spinner) registerSpinner()
}
