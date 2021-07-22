import mongoose from "mongoose";

let schema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true, default: "Anonymous"},
    attachment: {type: String},
    likeCount: {type: Number, default: 0},
}, {timestamps: true});
export const PostModel = mongoose.model('Post', schema);