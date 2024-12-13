import { z } from 'zod';

// ----------------------------------------------------------------

export const serviceSchema = z.object({
  carModel: z.string().min(1, 'Izaberite model.'),
  services: z.array(z.string()).min(1, 'Izaberite najmanje jednu uslugu.'),
  price: z.number(),
  totalDiscount: z.number(),
  discount: z.object({
    id: z.string().optional(),
    code: z.string().optional(),
    amount: z.number().optional(),
    type: z.enum(['percentage', 'amount']).optional(),
  }),
  user: z.object({
    name: z.string().trim().min(3, 'Ime i prezime je obavezno.'),
    phone: z.string().trim().min(3, 'Telefon je obavezan.'),
    email: z.string().trim().email('Email je obavezan.'),
    note: z
      .string()
      .trim()
      .min(3, 'Napomena mora imati najmanje 3 karaktera.')
      .optional()
      .or(z.literal('')),
  }),
});

export type IServiceSchema = z.infer<typeof serviceSchema>;
