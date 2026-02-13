import { app } from "./app";
import { sequelize } from "./config/database";

// Port configuration
const PORT = process.env.PORT || 3000;

/**
 * Start server and connect to database
 */
(async () => {
  try {
    // Database connection
    await sequelize.authenticate();
    console.log("Database connected successfully");

    // Sync database models
    await sequelize.sync({ alter: process.env.NODE_ENV === "development" });
    console.log("Database synced");

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
})();

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  await sequelize.close();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("SIGINT received, shutting down gracefully");
  await sequelize.close();
  process.exit(0);
});