import {createInsertSchema, createSelectSchema} from "drizzle-zod";
import {tickets} from "@/db/schema";
import {z} from "zod";

export const insertTicketSchema = createInsertSchema(tickets, {
    id: z.union([z.number(), z.literal("(New)")]),
    title: (schema) => schema.refine((value) => value.length > 0, "Title is required"),
    description: (schema) => schema.refine((value) => value.length > 0, "Description is required"),
    tech: (schema) =>  schema.refine(
        (value) => /\S+@\S+\.\S+/.test(value),
        "Invalid email address"
    ),
})

export const selectTicketSchema = createSelectSchema(tickets)

export type insertTicketSchemaType = typeof insertTicketSchema._type
export type selectTicketSchemaType = typeof selectTicketSchema._type