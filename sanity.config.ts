import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "xfkatw18",
  dataset: "production",
  title: "Instig Labs",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config