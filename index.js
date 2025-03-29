require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const seatRoutes = require("./routes/seatRoutes");

const app = express();
app.use(
  cors({
    origin: "https://your-netlify-site.netlify.app", // ✅ Replace this!
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/seats", seatRoutes);

const PORT = 5001;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  try {
    await sequelize.sync({ force: false });
    console.log("✅ Database synced!");
  } catch (err) {
    console.error("❌ Sync failed:", err);
  }
});
