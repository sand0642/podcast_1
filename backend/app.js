const express = require("express");
const app = express();
const userApi = require("./routes/user");

require("dotenv").config();
require("./conn/conn");

//all routes
app.use(express.json());
app.use("/api/v1", userApi);

app.listen(process.env.PORT, () => {
  console.log(`server started on port : ${process.env.PORT}`);
});
