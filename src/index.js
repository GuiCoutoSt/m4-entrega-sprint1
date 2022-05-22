import express from "express";
import router from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/users", router);

app.listen(3000);
