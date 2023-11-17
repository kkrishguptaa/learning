import { zodToJsonSchema } from "zod-to-json-schema";
import * as fs from "fs";
import * as path from "path";

import { schema } from "../lib/schema";
import { z } from "zod";
import { dir } from "../lib/const";

const jsonSchema = Object.fromEntries(
  Object.entries(schema).map(([name, schema]) => {
    return [
      name,
      zodToJsonSchema(z.object({
        data: schema
      }), {
        name,
      })
    ];
  })
);

Object.entries(jsonSchema).forEach(([name, schema]) => {
  fs.writeFileSync(
    path.join(dir.models, `${name}.json`),
    JSON.stringify(schema, null, 2)
  );
});
