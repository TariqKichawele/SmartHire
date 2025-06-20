import { db } from "@/drizzle/db";
import { UserNotificationSettingsTable } from "@/drizzle/schema";
import { revalidateUserNotificationSettingsCache } from "./cache/userNotficationSettings";

export async function insertUserNotificationSettings(settings: typeof UserNotificationSettingsTable.$inferInsert) {
    await db.insert(UserNotificationSettingsTable).values(settings).onConflictDoNothing();

    revalidateUserNotificationSettingsCache(settings.userId);
}