require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mariadb = require("mariadb");
const router = require("./routes/auth");
const aboutRouter = require("./routes/aboutRouter");
const loginRouter = require("./routes/loginRouter");
const forgotRouter = require("./routes/forgotRouter");
const rulesRouter = require("./routes/rulesRouter");
const path = require("path");
const app = express();
const organizationalRouter = require("./routes/organizationalRouter");
const mandalRouter = require("./routes/mandalRouter");
const annualRouter = require("./routes/annualRouter");
const commissionRouter = require("./routes/commissionRouter");
const judgementRouter = require("./routes/judgementRouter");
const centralistRouter = require("./routes/centralistRouter");
const memorandumRouter = require("./routes/memorandumRouter");
const ministryRouter = require("./routes/ministryRouter");
const noticeRouter = require("./routes/noticeRouter");
const meetingRouter = require("./routes/meetingRouter");
const navrouter = require("./routes/navrouter");
const advicesRouter = require("./routes/advicesRouter");
const actRouter = require("./routes/actRouter");
const videoRouter = require("./routes/videoRouter");
const permissionsrouter = require("./routes/permissionsrouter");
const photoRouter = require("./routes/photoRouter");
app.use(cors());
app.use(express.json());

// Create a MariaDB connection pool
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  connectionLimit: 5,
});

// Function to execute queries
const queryDB = async (query, params) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(query, params);
    return result;
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  } finally {
    if (conn) conn.release();
  }
};

// Test database connection
(async () => {
  try {
    const rows = await queryDB("SELECT 1");
    console.log("Connected to MariaDB:", rows);
  } catch (err) {
    console.error("MariaDB Connection Error:", err);
  }
})();

//API ENDPOINTS
app.use("/auth", router);
app.use("/aboutus", aboutRouter);
app.use("/user", loginRouter);
app.use("/reset", forgotRouter);
app.use("/rules", rulesRouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/organizational", organizationalRouter);
app.use("/mandal", mandalRouter);
app.use("/annual", annualRouter);
app.use("/commission", commissionRouter);
app.use("/judgement", judgementRouter);
app.use("/centralist", centralistRouter);
app.use("/memorandum", memorandumRouter);
app.use("/ministry", ministryRouter);
app.use("/notice", noticeRouter);
app.use("/meeting", meetingRouter);
app.use("/navrouter", navrouter);
app.use("/advices", advicesRouter);
app.use("/ncbc-act", actRouter);
app.use("/video", videoRouter);
app.use("/role", permissionsrouter);
app.use("/photo", photoRouter);



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
