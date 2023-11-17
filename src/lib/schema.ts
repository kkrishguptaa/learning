import { z } from 'zod'

const entries = {
  projects: z.array(z.object({
    name: z.string(),
    logo: z.string().url(),
    description: z.string(),
    repository: z.object({
      host: z.enum(['github', 'gitlab']),
      username: z.string(),
      slug: z.string(),
      url: z.optional(z.string().url()),
    }).transform((repository) => {
      let url: string = repository.url ?? (repository.host === 'github' ? 'https://github.com' : 'https://gitlab.com') + `/${repository.username}/${repository.slug}`

      return {
        ...repository,
        url
      }
    }),
    links: z.array(z.object({
      text: z.string(),
      link: z.string().url(),
      primary: z.optional(z.boolean()).default(false),
      button: z.optional(z.object({
        icon: z.string(),
      }))
    })),
    technologies: z.array(z.string()),
  }))
}

export const schema = {
  projects: entries.projects,
  assignments: entries.projects
}
