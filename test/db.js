const authors = [
    { id: 1, name: "Sid" },
    { id: 2, name: "Edith" },
    { id: 3, name: "Opener" },
];

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
}

module.exports = { getAuthorById };