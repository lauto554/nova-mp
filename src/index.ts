import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import colors from "colors";

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "API is running",
    status: "success",
  });
});

app.get("/api/health", (req: Request, res: Response) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(colors.green(`✓ Server running on port ${PORT}`));
  console.log(colors.cyan(`✓ Environment: ${process.env.NODE_ENV || "development"}`));
  console.log(colors.yellow(`✓ API available at http://localhost:${PORT}`));
});

export default app;
