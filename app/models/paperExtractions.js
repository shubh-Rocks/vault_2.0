import mongoose from "mongoose";

const paperExtractionSchema = new mongoose.Schema({
  paperID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  metadata: {
    type: Object,
    required: true,
  },
  sections: {
    type: [String],
    required: true,
  },
  extractedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.PaperExtraction || mongoose.model("PaperExtraction", paperExtractionSchema);
