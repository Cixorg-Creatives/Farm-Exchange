import mongoose, { Schema } from "mongoose";

const amenitySchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
});

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  availabilityStatus: {
    type: String,
    enum: ["", "available", "not-available"],
    // required: true,
  },
  type: {
    type: String,
    enum: ["", "farmland", "farmhouse", "agricultureland", "organic"],
    // required: true,
  },
  category: {
    type: String,
    enum: ["", "elite", "featured", "recommended"],
    // required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  gallery: [
    {
      type: String,
      // required: true,
    },
  ],
  price: {
    value: {
      type: Number,
      // required: true,
    },
    unit: {
      type: String,
      enum: ["lakh", "crore"],
      // required: true,
    },
  },
  pricePerArea: {
    value: {
      type: Number,
      // required: true,
    },
    unit: {
      type: String,
      enum: ["ft", "acre"],
      // required: true,
    },
  },
  plotArea: {
    value: {
      type: Number,
      // required: true,
    },
    unit: {
      type: String,
      enum: ["ft", "acre"],
      // required: true,
    },
  },
  totalProjectArea: {
    value: {
      type: Number,
      // required: true,
    },
    unit: {
      type: String,
      enum: ["ft", "acre"],
      // required: true,
    },
  },
  propertyDescription: {
    type: String,
    // required: true,
  },
  projectDescription: {
    type: String,
    // required: true,
  },
  projectAbout: {
    type: String,
    // required: true,
  },
  developer: {
    name: {
      type: String,
      // required: true,
      trim: true,
    },
    logo: {
      type: String,
      // required: true,
    }
  },
  amenities: [amenitySchema],
  location: {
    locality: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    state: {
      type: String,
      // required: true,
    },
    pinCode: {
      type: String,
      // required: true,
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
  },
  status: {
    type: String,
    enum: ["published", "draft"],
    default: "draft",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

propertySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model("properties", propertySchema);
