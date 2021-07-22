import {Container, Fab} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import Header from "../../component/header";
import PostList from "../../component/postlist";
import useStyle from "./styles";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import * as action from "../../redux/action/post/index";
import CreatePostModal from "../../component/createpostmodal";

function Homepage(props) {
    let classes = useStyle();
    let dispatch = useDispatch();
    const openCreatePostModal = useCallback(() => {
        dispatch(action.showModal());
    }, [dispatch]);
    return (
        <Container maxWidth="lg" className="">
            <Header/>
            <PostList/>
            <Fab color="primary" className={classes.fab}><Add onClick={openCreatePostModal}/></Fab>
            <CreatePostModal/>
        </Container>
    );
}

export default Homepage;
