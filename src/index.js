const express = require("express");
const taskRouter = require("./routers/task");
const userRouter = require("./routers/user");
require("./db/mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
app.use(cors());

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// port listen //
app.get("/home",(req,res)=>{
  res.send("HELLO Tushhy")
})

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
