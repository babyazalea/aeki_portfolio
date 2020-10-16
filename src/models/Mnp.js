import mongoose from "mongoose";

const MnpSchema = new mongoose.Schema({
  createDate: {
    type: Date,
    default: Date.now,
  },
  customerName: {
    type: String,
    required: "Customer Name is required",
  },
  isellNumber: {
    type: String,
    required: "iSell Number is required",
  },
  customerPhone: {
    type: String,
    require: "Customer tel is required",
  },
  address: {
    type: String,
    require: "Address is required",
  },
  reservationDate: {
    type: Date,
    required: "Reservation Date is require",
  },
  siteCondition: String,
  siteShape: String,
  freePlanning: String,
  manager: String,
  doorName: String,
  countertop: String,
  sink: String,
  tap: String,
  appliance: String,
  hood: String,
  singularityText: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Mnp", MnpSchema);

export default model;
