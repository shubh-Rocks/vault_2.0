import mongoose from "mongoose";

const coinTransactionSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    transactionType: {
        type: String,
        enum: ["sign-up", "referral", "top-up", "unlock"],
        required: true
    },
    balanceAfter: {
        type: Number,
        required: true,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

export default mongoose.models.CoinTransaction || mongoose.model("CoinTransaction", coinTransactionSchema)