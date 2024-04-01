import { z } from 'zod';

export const authValidator = z.object({
  uid: z.string().refine(str => {
    if (str.length < 3) {
      throw new Error('Username must be at least 3 characters long');
    }

    return true;
  }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, {
      message: 'Password must be at least 8 characters long',
    }),
});

export type AuthValidator = z.infer<typeof authValidator>;
