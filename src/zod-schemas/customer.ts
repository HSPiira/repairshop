import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { customers } from "@/db/schema";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) =>
    schema.refine((value) => value.length > 0, "First name is required"),
  lastName: (schema) =>
    schema.refine((value) => value.length > 0, "Last name is required"),
  address1: (schema) =>
    schema.refine((value) => value.length > 0, "Address is required"),
  city: (schema) =>
    schema.refine((value) => value.length > 0, "City is required"),
  state: (schema) =>
    schema.refine(
      (value) => value.length === 2,
      "State must be exactly 2 characters"
    ),
  email: (schema) =>
    schema.refine(
      (value) => /\S+@\S+\.\S+/.test(value),
      "Invalid email address"
    ),
  zip: (schema) =>
    schema.refine(
      (value) => /^\d{5}(-\d{4})?$/.test(value),
      "Invalid Zip code. Use 5 digits or 5 digits followed by a hyphen and 4 digits"
    ),
  phone: (schema) =>
    schema.refine(
      (value) => /^\d{3}-\d{3}-\d{4}$/.test(value),
      "Invalid phone number format. Use XXX-XXX-XXXX"
    ),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type
export type selectCustomerSchemaType = typeof selectCustomerSchema._type