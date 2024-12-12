import { z } from 'zod';

export const serviceSchema = z.object({
  carModel: z.string().min(1, 'Please select a car model.'),
  service: z.string().min(1, 'Please select at least one service.'),
  price: z.number(),
  discountedPrice: z.number(),
  discount: z.object({
    dcode: z.string().min(1).optional(),
    amount: z.number().optional(),
    type: z.enum(['percentage', 'amount']),
  }),
  user: z.object({
    name: z.string().min(3, 'Full name must be at least 3 characters long'),
    phone: z.string().min(3, 'Full name must be at least 3 characters long'),
    email: z.string().email('Please enter valid email address.'),
    note: z.string().min(5, 'Note must be at least 5 characters long'),
  }),
});
