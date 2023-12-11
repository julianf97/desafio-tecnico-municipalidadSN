import express from "express";
import cors from "cors";
import { db } from "./db/database.js";
import router from "./routes/routes.js"; 

const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json({
    type: "*/*"
}));

app.use(cors());

async function dbConnection() {
    try {
        await db.authenticate();
        console.log("Database Online");
    } catch (error) {
        throw new Error(error);
    }
}

dbConnection();

app.use("/api", router); 

app.listen(3000, () => {
    console.log(`Server running on http://localhost:${port}/api/`);
});