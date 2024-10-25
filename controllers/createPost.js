//import model

const { response } = require("express");

// const post = await Post.create({ heading, body, liked, unliked });

const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    //extract heading and body
    const { heading, body, liked, unliked } = req.body;
    //create a new post and insert into db
const post = await Post.create({ heading, body, liked, unliked });
    
    //send a json response for success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};

