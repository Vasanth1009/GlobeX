import mongoose from 'mongoose';

const WordCount = new mongoose.Schema({
  webURL: String,
  count: Number,
  isFavorite: {
    type: Boolean,
    default: false,
  },
  userId: String,
});

export default mongoose.model('WordCount', WordCount, 'wordCounts');
