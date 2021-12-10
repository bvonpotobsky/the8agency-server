const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
