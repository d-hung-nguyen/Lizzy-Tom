import mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: String,
  gender: String,
  color: String,
  dateOfBirth: Date,
  identityNumber: String,
  transponderCode: String,
  Status: String,
});

const Cat = mongoose.models.Cat || mongoose.model('Cat', catSchema);

export default Cat;