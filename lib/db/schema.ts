// lib/db/schema.ts
import { pgTable, serial, text, timestamp, varchar, boolean } from "drizzle-orm/pg-core";

export const updates = pgTable("updates", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  badge: varchar("badge", { length: 50 }),
  color: varchar("color", { length: 100 }).default("from-blue-500 to-cyan-500"),
  slug: varchar("slug", { length: 300 }).notNull().unique(),
  published: boolean("published").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Update = typeof updates.$inferSelect;
export type NewUpdate = typeof updates.$inferInsert;