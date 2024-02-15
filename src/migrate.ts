import { migrate } from "drizzle-orm/postgres-js/migrator";
import db from "./db";

export const migratieDB = async () => {
  console.log("migration DB");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("db migrated");
};

migratieDB();
