import { numeric, text, pgTable, serial, index, timestamp, date } from "drizzle-orm/pg-core";

export const projects = pgTable(
  "projects",
  {
    id: serial("id").primaryKey(),
    name: text("project_name").notNull(),
    description: text("project_description"),
    salary: numeric("project_salary", { precision: 12, scale: 2 }).notNull(),
  },
);



// // Schema for inserting a user - can be used to validate API requests
// export const insertExpensesSchema = createInsertSchema(expenses, {
//   title: z
//     .string()
//     .min(3, { message: "Title must be at least 3 characters" }),
//   amount: z.string().regex(/^\d+(\.\d{1,2})?$/, {message: "Amount must be a valid monetary value"})
// });
// // Schema for selecting a Expenses - can be used to validate API responses
// export const selectExpensesSchema = createSelectSchema(expenses);