import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true },
  userName: { type: String, required: true, lowercase: true },
  email: { type: String, required: true, lowercase: true },
  userType: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["admin", "vendor", "consumer"],
  },
  password: { type: String, require: true },
});

const Vendor = mongoose.model("Vendor", VendorSchema);

export default Vendor;
