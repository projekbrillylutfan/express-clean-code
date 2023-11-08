import express, { Application, NextFunction } from "express";
import UserHandler from "./handlers/users";
//import PostHandler from "./handlers/users";

const app: Application = express();
const PORT: number = 8080;

app.use(express.json());

const userHandler = new UserHandler();
// const postHandler = new PostHandler();



app.get("/api/users", userHandler.getUsers);
app.get("/api/users/:id", userHandler.getUserById);
app.post("/api/users", userHandler.creatUser);
app.delete("/api/users/:id", userHandler.deleteUserById);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});