import { integer,json ,pgTable,serial,varchar } from "drizzle-orm/pg-core";

export const CarListing = pgTable("carListing", {
  id: serial("id").primaryKey(),
  listingTitle: varchar("listingTitle").notNull(),
  tagline: varchar("tagline").notNull(),
  originalPrice: varchar("originalPrice").notNull(),
  sellingPrice: varchar("sellingPrice").notNull(),
  category: varchar("category").notNull(),
  condition: varchar("condition").notNull(),
  type: varchar("type").notNull(),
  make: varchar("make").notNull(),
  model: varchar("model").notNull(),
  year: varchar("year").notNull(),
  driveType: varchar("drive_type").notNull(),
  transmission: varchar("transmission").notNull(),
  fuelType: varchar("fuelType").notNull(),
  mileage: varchar("mileage").notNull(),
  engineSize: varchar("engineSize").notNull(),
  cylinder: varchar("cylinder").notNull(),
  color: varchar("color").notNull(),
  door: varchar("door").notNull(),
  offerType: varchar("offerType").notNull(),
  vin : varchar("vin").notNull(),
  listingDescription: varchar("listingDescription").notNull(),
 feature:json("feature"),
 createdBy: varchar("createdBy").notNull().default('mahjoubi.bilel@gmail.com'),
 postedOn: varchar("postedOn"),
})

export const CarImages = pgTable("carImages", {
  id: serial("id").primaryKey(),
  carListingId: integer("carListingId").notNull().references(() => CarListing.id),
  imageUrl: varchar("imageUrl").notNull(),
})