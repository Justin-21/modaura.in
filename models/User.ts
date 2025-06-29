import bcrypt from "bcryptjs";
import mongoose, { model, models, Schema } from "mongoose";

export interface UserTypes {
  email: string;
  password: string;
  _id?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<UserTypes>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

//pre() is a hook to process the password just before saving the user in the database.
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

//models contains all the models that are available
//model creates the a new model
const User = models?.User || model<UserTypes>("User", userSchema);

export default User;
