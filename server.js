import app from "./src/app.js"; 
import sequelize from "./src/config/db.js"; 

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.sync(); 
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Error starting server:", err);
  }
};

startServer();
