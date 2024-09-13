import cors from "cors";
import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;

app.use(express.json());

app.use(cors());

interface ApiResponse {
  message: string;
}

app.get("/", (req: Request, res: Response<ApiResponse>) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
