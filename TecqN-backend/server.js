import Express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
// import connect from "./database/config.js";
import authRoutes from "./routers/auth.js";
import userRoutes from "./routers/users.js";
import postRoutes from "./routers/posts.js"
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./model/User.js";
import Post from "./model/Post.js";
import {users,posts} from "./data/index.js"

/** CONFIGURATION */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = Express();
config();

/**Helmet Protection Http */
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

/** Body Parser */
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/** Assets Connection  */
app.use("/assets", Express.static(path.join(__dirname, "public/assets")));

/** Application Port */
const PORT = process.env.PORT || 8000;

/**File Storage using Multer */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/** Routes With File */
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);
/** ROUTES */
app.use("/auth", authRoutes);
app.use("/users",userRoutes);
app.use("/posts", postRoutes);


/** Start Server only valid database Connection  */
mongoose
  .connect(process.env.ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server Connected at http://localhost:${PORT}`)
    );

    /* ADD DATA ONE TIME */
    
  })
  .catch((error) => console.log(`${error} did not connect`));
