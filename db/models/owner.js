import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  address: String,
  city: String,
  telephone: String,
});

const Owner = mongoose.models.Owner || mongoose.model('Owner', ownerSchema);

export default Owner;