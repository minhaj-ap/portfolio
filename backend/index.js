import e from "express";
import { Project, AIProject, LeetCode, Credential } from "./schema";
import { connectDb } from "./mongo";
import cors from "cors";
const PORT = process.env.PORT || 8000;
const app = e();
app.use(e.json());
app.use(
  cors({
    origin: ["https://minhajap.xyz", "http://localhost:3000"],
  })
);

app.post("/login", async (req, res) => {
  try {
    const GCode = req.body.code;
    const DBcode = await Credential.findOne();
    if (!DBcode) {
      res.status(404).json({ messae: "Cannot find credentials on DB" });
    }
    const status = await bcrypt.compare(GCode, DBcode.code);
    if (status) {
      res.status(200).json({ message: "Login Successfull" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error on login", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/get-projects");
app.get("/get-leetCodes");
app.get("/get-aiprojects");

app.post("/add-project");
app.post("/add-leetCode");
app.post("/add-aiproject");

app.put("/edit-project");
app.put("/edit-leetCode");
app.put("/edit-aiproject");

app.delete("/delete-project");
app.delete("/delete-leetCodes");
app.delete("/delete-aiproject")(async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server");
    process.exit(1);
  }
})();
