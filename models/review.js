import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    userName: String,
    starCount: String,
    descriptions: String,
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
