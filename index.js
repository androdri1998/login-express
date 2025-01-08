const express = require("express");
const usersRouter = require("./modules/users/routes");
const authRouter = require("./modules/auth/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
