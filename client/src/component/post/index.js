import React, {useCallback} from 'react';
import {Avatar, Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography} from "@material-ui/core";
import {Favorite, MoreVert} from "@material-ui/icons";
import moment from "moment";
import useStyle from "./style";
import {useDispatch} from "react-redux";
import * as action from "../../redux/action/post";

function Post(props) {
    let classes = useStyle();
    let dispatch = useDispatch();
    const handleLike = useCallback(() => {
        console.log("1")
        dispatch(action.updatePost.updatePostRequest({...props.post, likeCount: props.post.likeCount + 1}))
    }, [props.post]);
    return (
        <Card>
            <CardHeader avatar={<Avatar>A</Avatar>}
                        title={props.post.author && props.post.author}
                        subheader={props.post.createdAt && moment(props.post.createdAt).format("HH:MM DD-MM-YYYY")}
                        action={<IconButton><MoreVert/></IconButton>}
            />
            <CardMedia className={classes.media} image={props.post.attachment && props.post.attachment}
                       title={"Title"}/>
            <CardContent>
                <Typography variant="h5" color="textPrimary">{props.post.title}</Typography>
                <Typography variant="body2" component="p" color="textSecondary">{props.post.content}</Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={handleLike}>
                    <Favorite/> <Typography component="span"
                                            color="textSecondary"> {props.post.likeCount} like</Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;