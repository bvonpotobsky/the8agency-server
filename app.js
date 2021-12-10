const express = require("express");
const cors = require("cors");

const routerAPI = require("./routes/");

const {
  logErrorHandler,
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} = require("./middlewares/error.handler");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const whitelist = ["http://localhost:3005", "https://myappgoeshere.com"];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Access Denied"));
    }
  },
};
app.use(cors(options));

routerAPI(app);

app.use(logErrorHandler);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3005;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

module.exports = { app, server };
