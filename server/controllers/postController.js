import {PostModel} from "../models/postModel.js";

export const getPost = async (req, res) => {
    try {
        let posts = await PostModel.find();
        res.status(200).json({status: true, result: posts, msg: "Succes"});
    } catch (err) {
        console.error(err);
        res.status(500).json({status: false, result: [], msg: "Error"});
    }
}
export const createPost = async (req, res) => {
    try {
        let newPost = req.body;
        let post = new PostModel(newPost);
        await post.save();
        res.status(200).json({status: true, result: newPost, msg: "Succes"});
    } catch (err) {
        console.error(err);
        res.status(500).json({status: false, result: {}, msg: "Error"});
    }
}
export const updatePost = async (req, res) => {
    try {
        let updatePost = req.body;
        let post = await PostModel.findOneAndUpdate({_id: updatePost._id}, updatePost, {new: true});
        res.status(200).json({status: true, result: post, msg: "Succes"});
    } catch (err) {
        console.error(err);
        res.status(500).json({status: false, result: {}, msg: "Error"});
    }
}
export const deletePost = (req, res) => {
    res.send('delete');
}