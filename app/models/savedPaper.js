import mongoose from "mongoose";

const savedPaperSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  paperID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paper",
    required: true,
  },

  savedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.SavedPaper || mongoose.model("SavedPaper", savedPaperSchema);
