import fs from "fs";
import { data } from "../lib/data";
import { dir, root } from "../lib/const";
import path from "path";
import Handlebars from "handlebars";

Handlebars.registerHelper("urlify", (str: string) => encodeURIComponent(str));
Handlebars.registerHelper("divisibleBy3", (index: number, divisor: number) => index % 3 === 0);

fs.readdirSync(dir.templates).forEach((file) => {
  if (fs.lstatSync(path.join(dir.templates, file)).isDirectory()) return;

  const template = fs.readFileSync(path.join(dir.templates, file), "utf8");

  const compiled = Handlebars.compile(template);

  fs.writeFileSync(path.join(root, file), compiled(data));
});
