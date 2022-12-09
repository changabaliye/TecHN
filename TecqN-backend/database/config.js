import mongoose from "mongoose";
export default async function connect() {
  await mongoose.connect(process.env.ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database  Connected Successfully");
}
