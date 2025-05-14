import express from 'express';
import { getNotes, getByOwner, getById, createNote, updateNote, deleteNote } from '../cotrollers/NoteController.js';
import { verifyToken } from '../middleware/VerifyToken.js';

const router = express.Router();

router.get("/notes", verifyToken, getNotes);
router.get("/notes/:owner", verifyToken, getByOwner);
router.get("/notes/id/:id", verifyToken, getById);
router.post("/notes", verifyToken, createNote);
router.put("/notes/:id", verifyToken, updateNote);
router.delete("/notes/:id", verifyToken, deleteNote);

export default router;