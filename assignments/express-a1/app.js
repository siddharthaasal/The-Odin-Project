const express = require("express");
const path = require("path");

const app = express();

//routes
app.get("/", function (req, res) {
    const options = {
        root: path.join(__dirname)
    }
    const fileName = "index.html";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error("Error sending file:", err);
        } else {
            console.log("File sent successfully");
        }
    });
})
app.get("/about", function (req, res) {
    const options = {
        root: path.join(__dirname)
    }
    const fileName = "about.html";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error("Error sending file:", err);
        } else {
            console.log("File sent successfully");
        }
    });
})
app.get("/contact", function (req, res) {
    const options = {
        root: path.join(__dirname)
    }
    const fileName = "contact.html";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error("Error sending file:", err);
        } else {
            console.log("File sent successfully");
        }
    });
})

//redirect to the 404 page in case the route does not exist
app.all("*", function (req, res) {
    const options = {
        root: path.join(__dirname)
    }
    const fileName = "404.html";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error("Error sending file:", err);
        } else {
            console.log("Redirected to 404");
        }
    });
})

const PORT = 3001;
app.listen(PORT, function () {
    console.log("Server spinning on port:", PORT);
})