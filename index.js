import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import NoteRoute from './routes/NoteRoute.js';
import UserRoute from './routes/UserRoute.js';

const app = express();
app.set("view engine", "ejs");

dotenv.config();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.get("/", (req, res) => res.render("index"));
app.use(UserRoute);
app.use(NoteRoute);

app.listen(3001, () => console.log("Server connected"));