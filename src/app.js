import express from "express";
import morgan from "morgan";

import clientsRoutes from "./routes/clients.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", clientsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
