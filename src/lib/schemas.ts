import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255)
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .max(20)
    .regex(/^[\d\s()+-]*$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  service: z.string().max(100).optional().or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be under 5000 characters")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
