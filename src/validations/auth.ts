import { z } from 'zod';

export const authValidator = z.object({
  uid: z.string({ required_error: 'Uid is required' }).min(3, {
    message: 'Uid must be at least 3 characters long',
  }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, {
      message: 'Password must be at least 6 characters long',
    }),
});

export type AuthValidator = z.infer<typeof authValidator>;
