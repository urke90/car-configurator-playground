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
    name: z.string().min(3, 'Ime i prezime je obavezno.'),
    phone: z.string().min(3, 'Telefon je obavezan.'),
    email: z.string().email('Email je obavezan'),
    note: z.string().min(3, 'Napomena mora imati najmanje 3 karaktera'),
  }),
});

export type IServiceSchema = z.infer<typeof serviceSchema>;
