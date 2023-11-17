import * as yaml from 'yaml';
import * as fs from 'fs';
import * as path from 'path';
import * as z from 'zod';

import { schema } from './schema';
import _ from 'lodash';
import { dir } from './const';

const entries = z.object(schema).parse(Object.fromEntries(Object.entries(schema).map(([name, schema]) => {
  return [
    name,
    schema.parse(yaml.parse(fs.readFileSync(path.join(dir.data, `${name}.yaml`), 'utf8')).data).sort((a, b) => a.name < b.name ? -1 : 1),
  ];
})));

const technologies = _.uniq(entries.projects.flatMap(project => project.technologies)).sort((a, b) => a < b ? -1 :1).map(technology => {
    return {
      name: technology,
      projects: entries.projects.filter(project => project.technologies.includes(technology))
    };
  });

const threeProjectGroups = _.chunk(entries.projects, 3);
const threeAssignmentGroups = _.chunk(entries.assignments, 3);

export const data = {
  technologies,
  projects: {
    groups: {
      three: threeProjectGroups,
    },
    _: entries.projects,
  },
  assignments: {
    groups: {
      three: threeAssignmentGroups,
    },
    _: entries.assignments
  },
}
