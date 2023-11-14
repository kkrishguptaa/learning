import * as yaml from 'yaml';
import * as fs from 'fs';
import * as path from 'path';
import * as z from 'zod';

import { schema } from './schema';
import _ from 'lodash';

const entries = z.object(schema).parse(Object.fromEntries(Object.entries(schema).map(([name, schema]) => {
  return [
    name,
    schema.parse(yaml.parse(fs.readFileSync(path.join(__dirname, `../../../data/${name}.yaml`), 'utf8')).data).sort((a, b) => a.name < b.name ? -1 : 1),
  ];
})));

const technologies = _.uniq(entries.projects.flatMap(project => project.technologies)).sort((a, b) => a < b ? -1 :1).map(technology => {
    return {
      name: technology,
      projects: entries.projects.filter(project => project.technologies.includes(technology))
    };
  });

export const data = {
  ...entries,
  technologies
}
