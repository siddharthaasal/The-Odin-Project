const { Router } = require("express");
const { getAuthor } = require("../controllers/authorController");
const { getAuthorById } = require("../db");

const authorRouter = Router();

authorRouter.get("/:authorId", getAuthorById);