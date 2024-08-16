import { promises as fs } from 'fs'

(async () => {
  const [template] = await Promise.all([
    fs.readFile('./src/README.md.tpl', { encoding: 'utf-8' }),
  ])
  
  const resTemplate = template.replace(/%{{random}}%/g, Math.round(Math.random() * 100) / 10);

  await fs.writeFile('README.md', resTemplate)
})()