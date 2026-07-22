Creation of a Server.

Step 1. Create a folder

- npm init -y (creates a package.json file)
- npm i mongoose express
- Inside src folders app.js and Create the server

```js
// src/app.js
const express = require("express");
const app = express();
module.export = app;
```

- Inside server.js - Run the server

```js
// src/server.js
const app = require("./src/app");
app.listen(3000, () => {
  console.log("Server is running on the port 3000");
});
```

- Inside src/db/db.js -

```js
// src/db/db.js
const mongoose = require("mongoose");

async function connectDB() {
  // mongodb+srv://name:password@name.fz1zskm.mongodb.net/ This will connect upto the cluster not with the database, append db name [dbName], If theres no db created then whatever we enter after the URI, db will be created with that name.
  await mongoose.connect(
    "mongodb+srv://name:password@name.fz1zskm.mongodb.net/dbName",
  );
  console.log("Connected to DB");
}

module.exports = connectDB;
```

### Step 2.

```js
// src/server.js
const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDb();

app.listen(3000, () => {
  console.log("Server is running on the port 3000");
});
```

### Step 3. Schema creation

```js
// src/models/name/model.js
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Model to perform CRUD ops
const noteModel = mongoose.model("note", noteSchema);

module.export = noteModel;
```

### Step 4. require in app.js

```js
// src/app.js
const express = require("express");
const noteModel = require("./models/note.model");

// Middleware
const app(express.json());


// POST /notes => Create a note
app.post("/notes", async (req, res) => {
    const data = req.body;   // { title, description }

    await noteModel.create({
        title: data.title,
        description: data.description,
    })

    res.status(201).json({
        message: "Note Created"
    })
})

// GET /notes =>  Fetch created notes
app.get("/notes", async(req, res) => {

    const notes = await noteModel.find(); // find return an array of objects else []

    // findOne() - Will return a single object

    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id: id
    })
    
    res.status(200).json({
        message: "Note deleted successfully"
    })
})

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const description = req.body.description;

    await noteModel.findOneAndUpdate({ _id: id }, { description: description })

    res.status(200).json({
        message: "Note updated successfully";
    })
})

app.use(express.json);
module.export = app;
```

### Step 5. Imagekit
- Create an account in imagekit 