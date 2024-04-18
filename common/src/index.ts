import zod from 'zod';


// Signup Input
export const signupInput = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    name: zod.string()
})

// Signin Input

export const signinInput = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})

// Create Blog

export const createBlogInput = zod.object({
    title: zod.string(),
    content: zod.string(),
})

// Update Blog

export const updateBlogInput = zod.object({
    title: zod.string(),
    content: zod.string(),
    id: zod.string()
})



// type inferance in zod
export type SignupInput = zod.infer<typeof signupInput>
export type SigninInput = zod.infer<typeof signinInput>
export type CreateBlogInput = zod.infer<typeof createBlogInput>
export type UpdateBlogInput = zod.infer<typeof updateBlogInput>