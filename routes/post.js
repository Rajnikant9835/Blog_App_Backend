const express = require(`express`);

const router = express.Router();

//import controller
const {createPost} = require(`../controllers/createPost`);


//define api router
router.post("/createPost" , createPost);

//export router
module.exports = router;