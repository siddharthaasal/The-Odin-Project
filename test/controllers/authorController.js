const db = require("../db");

async function getAuthor(req, res) {
    const { authorId } = req.params;
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        res.status(404).send("Author not found");
        return;
    }

    res.send("Author:", author.name);
}

module.exports = { getAuthor };