import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      min: 2,
      max: 50,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
      required: [true, "Email required"],
    },
    password: {
      type: String,
      required: [true, "Password is missing"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm Password is Missing"],
      /**custom validator*/
      validate: {
        validator: function () {
          return this.password == this.confirmPassword;
        },
        /**error message*/
        message: "Password mismatch",
      },
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  /** Date of Creation */
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
