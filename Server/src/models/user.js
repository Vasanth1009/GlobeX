import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: String,
  email: String,
  userId: String,
  photoURL: String,
});

export default mongoose.model('User', User, 'users');
