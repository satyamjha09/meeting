import express, { Application, Request, Response } from "express";
import cors from "cors";
import meetingRoutes from "./modules/meeting/routes/meeting.routes";
import userRoutes from "./modules/user/user.routes";
import { errorHandler } from "./middlewares/error.middleware";


export const app: Application = express();

// Security & CORS middleware
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") || "*",
    credentials: true,
  })
);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/meetings", meetingRoutes);
app.use("/users", userRoutes);

// 404 handler - Route not found
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

// Global error handler (should be last)
app.use(errorHandler);