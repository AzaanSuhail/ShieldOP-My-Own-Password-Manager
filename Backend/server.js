const express = require("express");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const bodyparser = require('body-parser');
const cors = require('cors');

dotenv.config();

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

// Database Name
const dbName = "shieldOP";
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(cors());
client.connect();

// get all the passwords
app.get("/", async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection("passwords");
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
  } catch (error) {
    console.error("Error fetching passwords:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// save a password
app.post("/", async (req, res) => {
  try {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection("passwords");

    // Insert the new password
    const insertResult = await collection.insertOne(password);
    res.json({ success: true, result: insertResult });
  } catch (error) {
    console.error("Error saving password:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// delete a password
app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id; // Get the id from request parameters
    console.log("Deleting password with id:", id); // Debug log to see what id is being received

    const db = client.db(dbName);
    const collection = db.collection("passwords");

    // Since you are using uuid, `_id` is a string, not ObjectId
    const deleteResult = await collection.deleteOne({ _id: id });
    console.log("Delete result:", deleteResult); // Debug log to see the result of the delete operation

    if (deleteResult.deletedCount === 1) {
      res.json({ success: true, message: "Password deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Password not found" });
    }
  } catch (error) {
    console.error("Error deleting password:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
