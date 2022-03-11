(async () => {
  const express = require("express");
  const morgan = require("morgan");
  const { join } = require("path");
  const cors = require("cors");
  const expressStaticGzip = require("express-static-gzip");
  const app = express();
  const publicFolder = join(__dirname, "client", "build");
  const PORT = process.env.PORT || 8080;
  const appName = process.env.APP_NAME || "Face App";
  const api = process.env.API_RELATIVE || "/api/v1";
  app.use(cors()); // Standard CORS setup
  app.use(express.json()); // Allow JSON body
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan("dev"));
  app.use(
    "/",
    expressStaticGzip(publicFolder, {
      enableBrotli: true,
      orderPreference: ["br", "gz"],
    })
  );
  app.use("/*", (req, res) => {
    res.sendFile(join(__dirname, "client", "build", "index.html"));
  });
  app.listen(PORT, () => console.log("listening on port", PORT));
})();
