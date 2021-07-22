import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import Post from "../post";
import {useDispatch, useSelector} from "react-redux";
import * as action from "../../redux/action/post";

function PostList(props) {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let [postList, setPostList] = useState([]);
    useEffect(() => {
        dispatch(action.getPost.getPostRequest());
    }, []);
    useEffect(() => {
        setPostList(state.post);
    })
    return (
        <Grid container spacing={2} alignItems={"stretch"}>
            {
                postList && postList.hasOwnProperty("data") && postList.data &&
                postList.data.hasOwnProperty("result") && postList.data.result &&
                postList.data.result.length > 0 &&
                postList.data.result.map((x) => <Grid item xs={12} sm={6} xl={4}>
                    <Post post={x} key={"post" + x._id}/>
                </Grid>)
            }
        </Grid>
    );
}

export default PostList;