const express = require('express');
const {getFeedPosts,getUserPosts,likePost}= require('../controllers/posts');
const {verifyToken} = require('../middleware/auth');

const router = express.Router();

/* Read */
router.get("/",verifyToken,getFeedPosts);
router.get("/:userId/posts",verifyToken,getUserPosts)


/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;