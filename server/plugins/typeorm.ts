import { initializeDatabase } from "../db/data-source";

export default defineNitroPlugin(async () => {
  try {
    await initializeDatabase();
  } catch (error) {
    console.error("❌ Failed to initialize database:", error);
  }
});
