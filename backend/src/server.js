import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path"; // for deploy

const app = express();
const PORT = process.env.PORT || 5001

const __dirname = path.resolve() // for deploy

dotenv.config();
if (process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: "http://localhost:5173",
    }));
}


app.use(express.json()); // middleware
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

// for deploy
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/dist')))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    })
})
