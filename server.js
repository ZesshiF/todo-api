import app from "./src/app.js"; // Import Express app
import sequelize from "./src/config/db.js"; // Import database connection

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.sync(); // Sync database
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Error starting server:", err);
  }
};

startServer();
