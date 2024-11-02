import { sql } from "drizzle-orm";
import {integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("users", {
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  company: text("company").notNull().default("none"), 
  country: text("country"),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;