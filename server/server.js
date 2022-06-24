const express = require("express");
const morgan = require("morgan");

const apiHandler = require("./routes/api");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan("dev"));
app.use("/api", apiHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
