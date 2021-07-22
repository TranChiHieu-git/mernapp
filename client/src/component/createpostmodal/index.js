import React, {useCallback, useEffect, useState} from 'react';
import Modal from '@material-ui/core/Modal';
import {useDispatch, useSelector} from "react-redux";
import * as action from "../../redux/action/post/index"
import useStyle from "./style";
import {Button, TextareaAutosize, TextField} from "@material-ui/core";
import FileBase64 from "react-file-base64";

function CreatePostModal(props) {
    let isShow = useSelector(state => state.modal);
    let dispatch = useDispatch();
    let classes = useStyle();
    let [show, setShow] = useState(false);
    let [data, setData] = useState({
        title: "",
        author: "",
        content: "",
        attachment: "",
    });
    const closeCreatePostModal = useCallback(() => {
        dispatch(action.hideModal());
        setData({
            title: "",
            author: "",
            content: "",
            attachment: "",
        });
    }, [dispatch]);
    const handleSumbit = useCallback(() => {
        dispatch(action.createPost.createPostRequest(data));
        closeCreatePostModal();
    }, [data]);
    useEffect(() => {
        setShow(isShow.isShow)
    }, [isShow]);
    return (<Modal open={show} onClose={closeCreatePostModal}>
        <div className={classes.paper} id="simple-modal-title">
            <h2>Create new post</h2>
            <form noValidate autoComplete="off" className={classes.form}>
                <TextField className={classes.title} required label="Title" value={data.title}
                           onChange={(e) => setData({...data, title: e.target.value})}/>
                <TextField className={classes.title} label="Author" value={data.author}
                           onChange={(e) => setData({...data, author: e.target.value})}/>
                <TextareaAutosize className={classes.textarea} rowsMin={10} rowsMax={20} placeholder="content..."
                                  value={data.content} onChange={(e) => setData({...data, content: e.target.value})}/>
                <FileBase64 accept={"image/*"}
                            multiple={false}
                            type="file"
                            value={data.attachment}
                            onDone={({base64}) => setData({...data, attachment: base64})}
                />
                <div className={classes.footer}>
                    <Button variant="contained" color="primary" component="span" fullWidth
                            onClick={handleSumbit}>Create</Button>
                </div>
            </form>
        </div>
    </Modal>);
}

export default CreatePostModal;