const express = require("express");
const cors = require("cors");
const user = require("./controller");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
  try {
    let data = req.body;
    await user.add({data});
    res.send({ msg: "User added" });
  } catch (error) {
    console.log(error);
  }
});


app.listen(4000, () => { 
  console.info(`Running on 4000 `);
});