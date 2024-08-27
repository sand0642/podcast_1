const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/multer");
const Category = require("../models/category");
const Podcast = require("../models/podcast");

const router = require("express").Router();

//add-podcast
router.post("/add-podcast", authMiddleware, upload, async (req, res) => {
  const { title, description, category } = req.body;
  const frontImage = req.files["frontImage"][0].path;
  const audioFile = req.files["audioFile"][0].path;

  if (!title || !description || !category || !frontImage || !audioFile) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const { user } = req;
  const cat = await Category.findOne({ categoryName: category });
  if (!cat) {
    return res.status(400).json({ message: "No category found" });
  }
  const catid = cat._id;
  const userid = user._id;
  const newPodcast = new Podcast({
    title,
    description,
    category: catid,
    frontImage,
    audioFile,
    user: userid,
  });
});

module.exports = router;
