import express from 'express';
import { createUser, loginHandler, logout } from "../cotrollers/UserController.js";
import { refreshToken } from "../cotrollers/RefreshToken.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// endpoint untuk akses token
router.get("/token", refreshToken);

// endpoint untuk auth
router.post("/login", loginHandler);
router.delete("/logout", logout);

router.post("/register", verifyToken, createUser);

export default router;