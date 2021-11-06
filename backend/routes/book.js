import express from "express";
import book from "../controllers/book.js"

const router = express.Router();

router.post("/registerBooks", book.registerBook);

export default router;