const express = require("express");
const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();

const dbPath = path.join(__dirname, "goodreads.db");

let db = null;

app.get("/books/", async (request, response) => {
    const getBooksQuery = `
      SELECT
        *
      FROM
        book
      ORDER BY
        book_id;`;
    const booksArray = await db.all(getBooksQuery);
    response.send(booksArray);
});