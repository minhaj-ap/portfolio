import mongoose from "mongoose";

const credentials = mongoose.Schema({
  code: String,
});

export const Credential = mongoose.model("Credential", credentials);
const aiprojectSchema = mongoose.Schema({
  title: String,
  description: String,
  features: [String],
  tech: [String],
  github: String,
  contributorsWelcome: Boolean,
});
export const AIProject = mongoose.model("AIProject", aiprojectSchema);

const leetCodeSchema = mongoose.Schema({
  id: Number,
  title: String,
  difficulty: "Easy" | "Medium" | "Hard",
  topics: [String],
  solved: Boolean,
  solutionLink: String,
});

export const LeetCode = mongoose.model("LeetCode", leetCodeSchema);

const projectSchema = mongoose.model({
  title: String,
  description: String,
  tech: [String],
  metrics: [String],
  link: {
    live: String,
    github: String,
  },
});
export const Project = mongoose.model("Project", projectSchema);
