import { z } from 'zod'

export const schema = {
  projects: z.array(z.object({
    name: z.string(),
    logo: z.string().url(),
    description: z.string(),
    repository: z.object({
      host: z.enum(['github', 'gitlab']),
      username: z.string(),
      project: z.string(),
    }),
    links: z.array(z.object({
      text: z.string(),
      link: z.string().url(),
      primary: z.optional(z.boolean()).default(false),
    })),
    technologies: z.array(z.string()),
  }))
}
