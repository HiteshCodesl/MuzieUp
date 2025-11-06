import express from "express";
import { connectToDb } from "./db/db.js";
import userRoutes from "./routes/userRoute.js";
const app = express();
connectToDb();
app.use(express.json());
app.use('/api/users', userRoutes);
export default app;
//# sourceMappingURL=index.js.map