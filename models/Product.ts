import mongoose, { model, models, Schema } from "mongoose";

interface productTypes {
  _id: mongoose.Types.ObjectId;
  name: string;
  category: string;
  description: string;
  price: {
    mrp: number;
    sellingPrice: number;
  };
  images: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new Schema<productTypes>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      mrp: {
        type: Number,
        required: true,
      },
      sellingPrice: {
        type: Number,
        required: true,
      },
    },
    images: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Products =
  models?.Products || model<productTypes>("Products", ProductSchema);

export default Products;
