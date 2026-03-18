import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  reporterID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  paperID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paper",
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "reviewed", "dismissed"],
  },
  reportedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Report || mongoose.model("Report", reportSchema);
