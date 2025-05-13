import express from 'express';
import { getNotes, getByOwner, getById, createNote, updateNote, deleteNote } from '../cotrollers/NoteController.js';

const router = express.Router();

router.get("/notes", getNotes);
router.get("/notes/:owner", getByOwner);
router.get("/notes/id/:id", getById);
router.post("/notes", createNote);
router.put("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

export default router;