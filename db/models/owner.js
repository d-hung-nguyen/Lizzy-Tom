import mongoose, { Schema } from 'mongoose';
const ownerSchema = new Schema({
  name: String,
  address: String,
  zipCode: String,
  email: String,
  telephone: String,
});

const Owner = mongoose.models.Owner || mongoose.model('Owner', ownerSchema);

export default Owner;