import {takeLatest, call, put} from "redux-saga/effects";
import * as action from "../action/post";
import * as api from "../../api";

function* fetchPostSaga(actions) {
    try {
        let post = yield call(api.fetchPost);
        if (post.status) {
            yield put(action.getPost.getPostSuccess(post.data));
        } else {
            yield put(action.getPost.getPostFailure());
        }
    } catch (err) {
        console.log(err);
    }
}

function* createPostSaga(actions) {
    try {
        let post = yield call(api.createPost, actions.payload);
        if (post.status) {
            yield put(action.createPost.createPostSuccess(post.data));
        } else {
            yield put(action.createPost.createPostFailure());
        }
    } catch (err) {
        console.log(err);
    }
}

function* updatePostSaga(actions) {
    try {
        let post = yield call(api.updatePost, actions.payload);
        if (post.status) {
            yield put(action.updatePost.updatePostSuccess(post.data));
        } else {
            yield put(action.updatePost.updatePostFailure());
        }
    } catch (err) {
        console.log(err);
    }
}

function* mySaga() {
    yield takeLatest(action.getPost.getPostRequest, fetchPostSaga)
    yield takeLatest(action.createPost.createPostRequest, createPostSaga)
    yield takeLatest(action.updatePost.updatePostRequest, updatePostSaga)
}

export default mySaga;