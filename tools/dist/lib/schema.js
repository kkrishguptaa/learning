"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const zod_1 = require("zod");
exports.schema = {
    projects: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        logo: zod_1.z.string().url(),
        description: zod_1.z.string(),
        repository: zod_1.z.object({
            host: zod_1.z.enum(['github', 'gitlab']),
            username: zod_1.z.string(),
            project: zod_1.z.string(),
        }),
        links: zod_1.z.array(zod_1.z.object({
            text: zod_1.z.string(),
            link: zod_1.z.string().url(),
            primary: zod_1.z.optional(zod_1.z.boolean()).default(false),
        })),
        technologies: zod_1.z.array(zod_1.z.string()),
    }))
};
