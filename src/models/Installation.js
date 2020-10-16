import mongoose from "mongoose";

const InstallationSchema = new mongoose.Schema({
  createDate: {
    type: Date,
    default: Date.now,
  },
  customerName: {
    type: String,
    required: "Customer Name is required",
  },
  customerPhone: {
    type: String,
    required: "Phone Number is required",
  },
  isellNumber: {
    type: Number,
    required: "iSell no. is required",
  },
  ihpNumber: {
    type: String,
    required: "IHP no. is required",
  },
  installationAddress: {
    type: String,
    required: "Address is required",
  },
  reservationDate: {
    type: Date,
    required: "Reservation-Date is required",
  },
  deliveryDate: {
    type: Date,
    required: "Delivery-Date is required",
  },
  installaionDate: {
    type: Date,
    required: "Installation-Date is required",
  },
  installationCost: {
    type: Number,
    required: "Installation-Cost is required",
  },
  cmwCheck: String,
  cmwDate: Date,
  cmwInstallationCost: Number,
  cmwCost: Number,
  doorName: String,
  countertop: String,
  sink: String,
  tap: String,
  howToSink: String,
  cooktop: String,
  hood: String,
  lighting: String,
  changeText: String,
  notPurchasedCheck: String,
  articleNumber: [Number],
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

const model = mongoose.model("Installation", InstallationSchema);

export default model;
