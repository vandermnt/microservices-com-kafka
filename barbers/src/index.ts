import express from "express";
import barberRoutes from "./routes/barber.routes";

import "./database/database";

const app = express();

app.use(express.json());
app.use(barberRoutes);

app.listen(3331, () => {
  console.log("Server started");
});
