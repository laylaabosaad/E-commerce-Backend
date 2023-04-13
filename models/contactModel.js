import mongoose from 'mongoose';
//models for contact
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  streetLocation:{
    type:String,
    required:false,
  }
});


export default mongoose.model('Contact', contactSchema);