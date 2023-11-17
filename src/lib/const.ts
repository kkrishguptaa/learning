import path from "node:path";

export const root = path.join(__dirname, "../../");

export const dir = {
  templates: path.join(root, "templates"),
  data: path.join(root, "data"),
  models: path.join(root, "models"),
};
