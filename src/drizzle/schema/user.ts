import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "@/drizzle/schemaHelpers";
import { OrganizationUserSettingsTable } from "./organizationUserSettings";
import { UserResumeTable } from "./userResume";
import { UserNotificationSettingsTable } from "./userNotificationSettings";
import { relations } from "drizzle-orm";

export const UserTable = pgTable("users", {
    id: varchar().primaryKey(),
    name: varchar().notNull(),
    imageUrl: varchar().notNull(),
    email: varchar().notNull().unique(),
    createdAt,
    updatedAt,
})

export const userRelations = relations(UserTable, ({ one, many }) => ({
    notificationSettings: one(UserNotificationSettingsTable),
    resume: one(UserResumeTable),
    organizationUserSettings: many(OrganizationUserSettingsTable),
}))