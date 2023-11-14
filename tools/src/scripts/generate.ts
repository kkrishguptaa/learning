import fs from 'fs'
import { data } from '../lib/data'
import path from 'path'
import Handlebars from 'handlebars'

Handlebars.registerHelper('urlify', (str: string) => encodeURIComponent(str))

fs.readdirSync(path.join(__dirname, '../../../templates')).forEach(file => {
  const template = fs.readFileSync(path.join(__dirname, `../../../templates/${file}`), 'utf8')
  const compiled = Handlebars.compile(template)

  fs.writeFileSync(path.join(__dirname, `../../../${file}`), compiled(data))
})
