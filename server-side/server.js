const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const Student = require("./models/StudentModel");
const mongodbConnection = require("./mongoDB/MongoDbConnection");
const bcrypt = require("bcryptjs");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const studentsPendingRoutes = require("./routes/requestStudent");
const adminRoutes = require("./routes/admin");
const studentApproveRoutes = require("./routes/students");
const editStudentRoutes = require("./routes/editedStudent");

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Connection to Mongoose
mongoose
  .connect(mongodbConnection(), {
    dbName: "psits",
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//Routes
app.use("/api", registerRoutes);
app.use("/api", loginRoutes);
app.use("/api", studentsPendingRoutes);
app.use("/api", studentApproveRoutes);
app.use("/api", editStudentRoutes);
app.use("/api", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server started, listening at port ${PORT}`);
});
